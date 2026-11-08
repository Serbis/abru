import ActorRef from "./ActorRef";
import Message from "./Message";

export default class Envelope {
    sender: ActorRef;
    msg: Message;

    constructor(sender: ActorRef, msg: Message) {
        this.sender = sender;
        this.msg = msg;
    }
}