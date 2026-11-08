import {Actor, PoisonPill} from "./Actor";
import ActorRef from "./ActorRef";
import ActorCell from "./ActorCell";
import DefaultDispatcher from "./DefaultDispatcher";
import UnboundMailbox from "./UnboundMailbox";
import Props from "./Props";
import DeadLetters from "./DeadLetters";
import ActorPath from "./ActorPath";
import StringBuilder from "../../common/StringBuilder";

/** Actor system is a container for actors runtime. She is used for actor creation,  stop and other
 *  operations. */
export default class ActorSystem {


    /** Actors ids counter. His is used for set up actor name, if it was not be explicitly specified. */
    private nids: number = 0; // Async

    /** Mailbox for deadLetter actor */
    private deadLettersMailbox = new DeadLetters();

    debugActorList: Array<ActorPath> = [];

    /** Default dispatcher. Used if other dispatcher does not explicitly specified */
    dispatcher = new DefaultDispatcher();

    /** Sending message through this reference has is very low cost, because message after drop
     *  to the mailbox, is simply destroyed without hes subsequent execution planning. */
    deadLetters: ActorRef;

    /** Create new actor system */
    constructor() {
        let deadLettersCell = new ActorCell(new ActorPath("deadLetters"), null, this, this.dispatcher, this.deadLettersMailbox);
        deadLettersCell.start();
        this.deadLetters = new ActorRef(deadLettersCell)
    }

    printDebugActorList() {
        let sb = new StringBuilder();
        this.debugActorList.forEach((v) => sb.put(v.toString() + "\n"));
        console.log(sb.mkString())
    }

    /** Creates the new actor
     *
     * @param {Props} props actor instance description
     * @param {string} name optional actor name, if not set, it will be generated automatically
     * @return {ActorRef} actor reference
     */
    actorOf(props: Props, name: string = null): ActorRef {
        let mailbox = new UnboundMailbox();

        let aName = "";
        if (name) {
            aName = name;
        } else {
            aName = this.nids.toString();
            this.nids++;
        }

        let path = new ActorPath(aName);

        let cell = new ActorCell(path, props.actor, this, this.dispatcher, mailbox);
        cell.start();

        this.debugActorList.push(path);

        return new ActorRef(cell);
    }

    /** Stop specified actor
     *
     * @param {ActorRef} ref actor reference
     */
    stop(ref: ActorRef) {
        // Attention, identical code exists in the PoisonPill handler
        ref.cell.suspend();
        ref.cell.actor.timers().cancelAll();
        ref.cell.mailbox.cleanUp(ref, this.deadLetters);
        ref.cell.forceSend(new PoisonPill(), null);

        this.debugActorList = this.debugActorList.filter((v) => !ref.path().equals(v))
    }

    /** Runs the actor system. This method is blocks execution of the program, and execution of
     *  subsequent code, may be performed only after full stop of the actor system. */
    run() {
        this.dispatcher.run();
    }
}
