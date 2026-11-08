import ActorCell from "./ActorCell";
import {Actor} from "./Actor";
import Message from "./Message";
import Props from "./Props";
import Future from "../future/Future";
import CompletablePromise from "../future/CompletablePromise";
import ActorPath from "./ActorPath";
import {Duration} from "../../common/Duration";
import {AskTimeoutError} from "./Errors";
import Object from "../../common/Object";
import Comparable from "../../common/Comparable";

/** Reference to instance of some actor. It is an interface for interacting with the internal
 *  logic of the actor cell. */
export default class ActorRef extends Object implements Comparable {
    readonly cell: ActorCell;

    /** Creates a new reference. This method should never be invoked by application code.
     *
     * @param {ActorCell} cell owned actor cell
     */
    constructor(cell: ActorCell) {
        super();
        this.cell = cell;
    }

    /** Send a message to some actor on the principle of send and forget.
     *
     * @param msg message for send
     * @param {ActorRef} self self reference. If the sender value is null, then the recipient in
     *        the context.sender field will also be null.
     */
    tell(msg: any, self: ActorRef = null) {
        this.cell.send(msg, self)
    }

    /** Send a message to some actor and get a reply message from him. The result of this call
     *  will be a future, which will be filled in with the message received in response or it will
     *  fail if the actor does not send a response within the specified timeout.
     *
     *  Explanation of the internal logic of this method. This method creates a CompletablePromise
     *  and AskActor service actor. All the parameters passed to this method, as well as the
     *  promise created earlier, are transferred to the actor constructor. Future from Promise is
     *  sent as the result of a method call. After the start, AskActor sends a message to the
     *  target actor and starts a timeout timer. If the target actor responds before the timeout,
     *  the promise is filled with the received message. If a timeout message arrives, the promise
     *  fails with an AskTimeoutError error. In both lines of development of events, the work of the
     *  AskActor actor after receiving the message is completed.
     *
     * @param msg message for send
     * @param {ActorRef} self self actor reference
     * @param {Duration} timeout receive response timeout
     * @return {Future<any>} future with expected message or failure if timeout was reached
     */
    ask(msg: any, self: ActorRef = null, timeout: Duration = Duration.fromSeconds(3)): Future<any> {
        let p = new CompletablePromise();
        //FIXME self is not mey by used, because sender of this message is the AskActor!
        let fut = p.future;
        this.cell.system.actorOf(new Props(new AskActor(msg, this, self, p, timeout)));

        return fut;
    }

    /** Return actor path
     *
     * @return {ActorPath} actor path
     */
    path(): ActorPath {
        return this.cell.path;
    }

    /** Print actor path string */
    toString() {
        return this.path().toString();
    }

    /** Check ref's equality by the path's comparing*/
    equals(obj: ActorRef): boolean {
        return this.path().toString() == obj.path().toString();
    }
}

/** See ActorRef.tell method for comments */
class AskActor extends Actor {
    /** Target actor  */
    to: ActorRef;

    /** Message send from actor */
    from: ActorRef;

    /** Message for send */
    msg: Message;

    /** Response timeout */
    timeout: Duration;

    /** Result promise */
    p: CompletablePromise<any>;

    constructor(msg: Message, to: ActorRef, from: ActorRef, p: CompletablePromise<any>, timeout: Duration) {
        super();
        this.p = p;
        this.timeout = timeout;
        this.msg = msg;
        this.to = to;
        this.from = from;
    }

    /** Send message and start timeout timer */
    preStart() {
        this.to.tell(this.msg, this.context.self);
        this.timers().startSingleTimer(0, new AskActorTimeout(), this.context.self, this.timeout)
    }

    /** Receive message, if it is a message from the target actor - complete promise, else fail promise with
     *  AskTimeoutError */
    receive(msg: Message): boolean {
        if (msg instanceof AskActorTimeout) {
            let from = "outside";
            if (this.from)
                from = this.from.path().toString();
            let to = this.to.path().toString();
            let timeout = this.timeout.toString();
            this.p.failure(new AskTimeoutError(`Ask operation timeout from actor '${from}' to '${to}' after ${timeout}`));
        } else {
            this.p.success(msg);
        }


        this.context.system.stop(this.context.self);

        return true;
    }

}

class AskActorTimeout extends Message{}