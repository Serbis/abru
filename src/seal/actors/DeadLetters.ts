import Mailbox from "./Mailbox";
import Envelope from "./Envelope";
import ActorRef from "./ActorRef";

/** Special mailbox type for destroying not delivered messages. He  always stays in the planned
 *  state for preventing his execution be the dispatcher. All message which enqueued to this
 *  mailbox is logged and after that is dropped at the will of the GC. */
export default class DeadLetters extends Mailbox {

    constructor() {
        super();
        this.isPlanned = true; // It's always planned to prevent it's execution
    }

    dequeue(): Envelope {
        return undefined;
    }

    enqueue(envelope: Envelope) {
        let actorName = "outside";
        if (envelope.sender)
            actorName = envelope.sender.path().toString();

        console.log(`DeadLetter receive some message = ${envelope.msg.toString()} from '${actorName}'}`)
    }

    cleanUp(sender: ActorRef, deadLetters: ActorRef) {}

    hasMessages(): boolean {
        return false;
    }
}