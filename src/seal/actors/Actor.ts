import ActorContext from "./ActorContext";
import Message from "./Message";
import Timers from "./Timers";
import Future from "../future/Future";
import ActorRef from "./ActorRef";

/** Superclass actor Any class that assumes participation in the logic of communication in the
 *  actor system must implement this class. */
export abstract class Actor {

    /** Actor timers scheduler. Each actor has it's own scheduler. This value is lazy and created
     * on demand by the timers() call */
    private _timers: Timers;

    /** Current actor context */
    context: ActorContext = new ActorContext();

    /** Return timers scheduler */
    timers() {
        if (!this._timers)
            this._timers = new Timers();

        return this._timers;
    }

    /** Actor start hook. This method calls after full initialization of the actor before removing
     *  the flag of the actor stop (which is set initially when creating the actor cell). In fact,
     *  after exiting this method, the cell of the actor allows receiving incoming messages. At
     *  this stage, the context of the actor is fully initialized and can be used. */
    preStart() {}

    /** Actor stop hook. This method is called after the actor is completely stopped, which implies
     *  stopping the cell, mailbox and removing all scheduled tasks. In practice, this is the last
     *  point of the application code, in which the object of the actor is available to interact with
     *  its state. */
    postStop() {}

    /** Actor message handler. Returns a boolean value indicating whether the message was processed,
     *  or whether the handler received an unexpected message. To understand the principles of how
     *  the method works, an explanation should be given on which chain the incoming message goes
     *  through. Any message addressed to the actor is first processed by a internal handler, which
     *  determines whether the message sent is a service one. If it is, then it is processed,
     *  receive is not called. If not, the message is sent in receive, where the application code
     *  determines its type and does some work. If receive returns true, then the message message
     *  ends. Otherwise, it is sent to deadLetters. */
    abstract receive(msg: Message): boolean

    pipe(f: () => Future<Message>, to: ActorRef) {
        let sender = this.context.sender;
        f().onComplete((v) => {
                if (v.isSuccess()) {
                    to.tell(v.get(), sender);
                }
            });
    }
}

/**  Stops actor. When a message is sent to some actor directly, it is put in the mailbox as a
 *   regular message. After it has been processed, the actor will be stopped, and all messages in
 *   the mailbox after the PoisonPill will be drain to the DeadLetter. This message is also used
 *   implicitly when calling context.system.stop. In general terms, this operation prohibits the
 *   reception of new messages by the actor, clears the mailbox and puts the PoisonPill in it.
 *   After that, the actor will process it and self-destruct. Because the message is processed by
 *   an internal handler, it never reaches the receive method.*/
export class PoisonPill extends Message {}