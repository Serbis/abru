import ActorRef from "./ActorRef";
import ActorSystem from "./ActorSystem";

/** This object is used to describe the environment of the actor when processing the
 *  message.*/
export default class ActorContext {

    /** The sender of the message being processed. This value is changed when processing each new
     *  message. It will hold either the reference to the sender of the message, or the deadLetter
     *  reference, if when sending the message null was specified as the sender. */
    sender: ActorRef;

    /** Link to the self ref. This param is set only once in ActorCell.start method */
    self: ActorRef;

    /** Actor system on which the actor is executed */
    system: ActorSystem;
}