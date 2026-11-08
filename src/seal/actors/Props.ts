import {Actor} from "./Actor";

export default class Props {
    actor: Actor;
    mailbox = "default";
    dispatcher = "default";

    constructor(actor: Actor) {
        this.actor = actor;
    }
}