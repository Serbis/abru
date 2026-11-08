import Dispatcher from "./Dispatcher";
import Mailbox from "./Mailbox";
import {Actor} from "./Actor";
import Envelope from "./Envelope";
import ActorRef from "./ActorRef";
import ActorSystem from "./ActorSystem";
import Message from "./Message";
import ActorPath from "./ActorPath";

/** This object is essentially the actor itself. It encapsulate in self actor object, mailbox and
 *  dispatcher. Contains references to the actor system and other elements of the system. */
export default class ActorCell {
    /** Actor path object that represents the actor position in the actors hierarchy */
    path: ActorPath;

    /** Object which extends the actor superclass and contain application logic*/
    actor: Actor;

    /** Reference to the actor system */
    system: ActorSystem;

    /** Reference to the message dispatcher */
    dispatcher: Dispatcher;

    /** Actor mailbox */
    mailbox: Mailbox;

    /** Suspend flag. See the suspend method description for more details */
    suspended: boolean;

    /** Stop flag. See the start method description for more details */
    stopped: boolean = true;

    constructor(path: ActorPath, actor: Actor, system: ActorSystem, dispatcher: Dispatcher, mailbox: Mailbox) {
        this.path = path;
        this.actor = actor;
        this.mailbox = mailbox;
        this.dispatcher = dispatcher;
        this.system = system;
    }

    /** Starts the actor. Creates him context, run preStart hook and permits message receiving
     *  through dropping the stopped flag. */
    start() {
        if (this.actor) { // Because it may be a synthetic actor, such as DeadLetters
            this.actor.context.self = new ActorRef(this);
            this.actor.context.sender = this.system.deadLetters;
            this.actor.context.system = this.system;
            this.actor.preStart();
        }
        this.stopped = false;
    }

    /** Stops the actor. Prohibits receiving new messages and calls the postStop hook. */
    stop() {
        this.stopped = true;
        this.actor.postStop()
    }


    /** Suspends the actor. Prohibits receiving new messages */
    suspend() {
        this.suspended = true;
    }

    /** Sends the message to the actor. Creates new envelope with the message and indicates to
     *  dispatcher to schedule execution of this envelope. Message sends to the actors may be done,
     *  only if flags suspended and stopped will be dropped. Otherwise, the message will be dropped
     *  to deadLetter.*/
    send(msg: Message, self: ActorRef) {
        if (this.stopped || this.suspended) {
            this.system.deadLetters.tell(msg, self);
        } else {
            let envelope = new Envelope(self, msg);
            this.dispatcher.dispatch(this, envelope);
        }
    }

    /** Performs action identical to the send method do, but with ignoring state of the stopping flags. */
    forceSend(msg: Message, self: ActorRef) {
        let envelope = new Envelope(self, msg);
        this.dispatcher.dispatch(this, envelope);
    }
}