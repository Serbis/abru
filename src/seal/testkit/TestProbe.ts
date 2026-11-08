import Message from "../actors/Message";
import ActorSystem from "../actors/ActorSystem";
import {Actor} from "../actors/Actor";
import ActorRef from "../actors/ActorRef";
import {setInterval} from "timers";
import Props from "../actors/Props";

export default class TestProbe {
    system: ActorSystem;
    lastSender: ActorRef;
    expectedMessage: Message;
    timeout: number;
    lastMessage: Message = null;
    probingStartTime: number;
    pooledLastMessages: Array<Message> = [];
    pooledLastSenders: Array<ActorRef> = [];
    probeActor: ActorRef;

    constructor(system: ActorSystem) {
        this.system = system;

        this.probeActor = system.actorOf(new Props(new TestProbeActor(this)));
    }

    send(target: ActorRef, msg: Message) {
        target.tell(msg, this.probeActor);
    }

    expectMsg(msg: Message, timeout: number): Promise<boolean> {
        this.expectedMessage = msg;
        this.timeout = timeout;

        if (this.pooledLastMessages.length > 0) {
            this.lastSender = this.pooledLastSenders.shift();
            this.lastMessage = this.pooledLastMessages.shift();
        } else {
            this.lastSender = null;
            this.lastMessage = null;
        }


        this.probingStartTime = Date.now();


        return new Promise((resolve, reject) => {
            let int = setInterval(() => {
                if (Date.now() > this.probingStartTime + this.timeout) {
                    reject();
                    clearInterval(int);
                } else {
                    if (this.lastMessage.equals(this.expectedMessage)) {
                        resolve(true);
                        clearInterval(int);
                    } else {
                        resolve(false);
                        clearInterval(int);
                    }
                }
            }, 50)
        })
    }
}

class TestProbeActor extends Actor {
    owner: TestProbe;

    constructor(owner: TestProbe) {
        super();

        this.owner = owner;
    }

    receive(msg: Message): boolean {
        if (this.owner.lastMessage == null) {
            this.owner.lastSender = this.context.sender;
            this.owner.lastMessage = msg;
        } else {
            this.owner.pooledLastMessages.push(msg);
            this.owner.pooledLastSenders.push(this.context.sender);
        }

        return true;
    }

}