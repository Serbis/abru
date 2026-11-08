import Message from "./Message";
import {Duration} from "../../common/Duration";
import ActorRef from "./ActorRef";

/**
 * Realization of actor's tamers. This mechanism is designed to create a timer for sending messages
 * to yourself or to another actor after a specified time interval, with or without a periodicity.
 */
export default class Timers {
    singleTasks: Array<TimerTask> = [];
    periodicTasks: Array<any> = [];

    /** Start single timer
     *
     * @param key timer id
     * @param {Message} msg message for send
     * @param {ActorRef} self self reference
     * @param {Duration} timeout duration between sends
     */
    startSingleTimer(key: any, msg: Message, self: ActorRef, timeout: Duration) {
        let found = this.singleTasks.find((v) => v.key === key);

        if (found) {
            clearTimeout(found.id)
        }

        let id = setTimeout(() => {
            this.periodicTasks = this.periodicTasks.filter((v) => v.key != key);
            self.tell(msg, self)
        }, timeout.toMilliseconds());
        if (found) {
            found.id = id;
        } else {
            this.singleTasks.push(new TimerTask(key, id));
        }
    }

    /** Start periodic timer
     *
     * @param key timer id
     * @param {Message} msg message for send
     * @param {ActorRef} self self reference
     * @param {Duration} interval duration between sends
     */
    startPeriodicTimer(key: any, msg: Message, self: ActorRef, interval: Duration) {
        let found = this.periodicTasks.find((v) => v.key === key);

        if (found) {
            clearInterval(found.id)
        }

        let id = setInterval(() => self.tell(msg, self), interval.toMilliseconds());
        if (found) {
            found.id = id;
        } else {
            this.periodicTasks.push(new TimerTask(key, id));
        }

    }

    /** Return true if timer with specified id is exist or false instead
     *
     * @param key timer id
     * @return {boolean} result
     */
    isTimerActive(key: any): boolean {
        return this.periodicTasks.find((v) => v.key === key) != null;
    }

    /** Cancel timer with specified id
     *
     * @param key timer id
     */
    cancel(key: any) {
        let foundPeriodic = this.periodicTasks.find((v) => v.key === key);
        let foundSingle = this.singleTasks.find((v) => v.key === key);
        if (foundPeriodic) {
            clearInterval(foundPeriodic.id);
            this.periodicTasks = this.periodicTasks.filter((v) => v.key != key);
        }
        if (foundSingle) {
            clearTimeout(foundSingle.id);
            this.singleTasks = this.singleTasks.filter((v) => v.key != key);
        }
    }

    /** Cancel all timers */
    cancelAll() {
        this.singleTasks.forEach((v) => clearTimeout(v.id));
        this.periodicTasks.forEach((v) => clearInterval(v.id));
        this.singleTasks = [];
        this.periodicTasks = [];
    }
}

class TimerTask  {
    key: any;
    id: any;

    constructor(key: any, id: any) {
        this.key = key;
        this.id = id;
    }
}