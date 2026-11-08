import Mailbox from "./Mailbox";
import Envelope from "./Envelope";
import ActorRef from "./ActorRef";

export default class UnboundMailbox extends Mailbox {
    queue: Array<Envelope> = [];

    enqueue(envelope: Envelope) {
        this.queue.push(envelope)
    }

    dequeue(): Envelope {
        return this.queue.shift()
    }

    cleanUp(sender: ActorRef, deadLetters: ActorRef) {
        while (true) {
            if (this.queue.length > 0) {
                deadLetters.tell(this.queue.shift().msg, sender);
            } else {
                break;
            }
        }
        this.queue = [];
    }

    hasMessages(): boolean {
        return this.queue.length > 0;
    }
}