import Dispatcher from "./Dispatcher";
import Envelope from "./Envelope";
import Mailbox from "./Mailbox";
import ExecutionContext from "../async/ExecutionContext";
import {Actor, PoisonPill} from "./Actor";
import ActorRef from "./ActorRef";
import ActorCell from "./ActorCell";
import {inflate} from "zlib";

export default class DefaultDispatcher implements ExecutionContext, Dispatcher {
    private queue = [];

    // Кладет конвертик в ящик и планирует его ящик на выполнение если он не был заранее кем-то запланирован
    dispatch(cell: ActorCell, envelope: Envelope) {
        //FIXME а почему не устанавливается флаг о том, что он уже запланирован
        cell.mailbox.enqueue(envelope);
        if (!cell.mailbox.isPlanned) {
            this.registerForExecution(() => this.invoke(cell))
        }
    }

    // Это функция вызывает как таск в event-loop. Она занимается непосредственным
    // процессирование сообщений из ящика
    invoke(cell: ActorCell) {
        if (cell.mailbox.hasMessages()) { // Because it may be cleaned after planning if actor was stopped
            let envelope = cell.mailbox.dequeue();

            if (envelope.sender)
                cell.actor.context.sender = envelope.sender;
            else //If not sender, set deadLetters as sender
                cell.actor.context.sender = cell.system.deadLetters;

            let handled = this.internalReceive(envelope, cell);

            if (!handled) {
                let handled2 = cell.actor.receive(envelope.msg);
                if (!handled2) {
                    cell.system.deadLetters.tell(envelope.msg, envelope.sender);
                }
            }
        }

        cell.mailbox.isPlanned = false;
    }

    internalReceive(envelope: Envelope, cell: ActorCell): boolean {
        let msg = envelope.msg;
        if (msg instanceof PoisonPill) {
            cell.suspend();
            cell.actor.timers().cancelAll();
            cell.mailbox.cleanUp(new ActorRef(cell), cell.system.deadLetters);
            cell.stop();
        } else {
            return false;
        }

        return true;
    }


    // Тут происходит главный event-loop
    run() {
        let startTime = Date.now();

        while (this.queue.length > 0) {
            this.queue.shift()();
            if (Date.now() > startTime + 100)
                break;
        }

        setTimeout(() => this.run(), 50)
    }

    registerForExecution(f: () => void) {
        this.queue.push(f);
    }
}