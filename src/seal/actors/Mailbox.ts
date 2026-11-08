import Envelope from "./Envelope";
import {Actor} from "./Actor";
import ActorRef from "./ActorRef";

export default abstract class Mailbox {
    isPlanned: boolean;

    abstract enqueue(envelope: Envelope);

    abstract dequeue(): Envelope

    abstract cleanUp(sender: ActorRef, deadLetters: ActorRef);

    abstract hasMessages(): boolean;
}
