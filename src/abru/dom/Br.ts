import Message from "../../seal/actors/Message";
import Props from "../../seal/actors/Props";
import AbruComponent from "../components/AbruComponent";
import DomComponent from "./DomComponent";

export default class B extends DomComponent {

    static props(cProps: object) {
        return new Props(new B(cProps))
    }

    constructor(cProps: object) {
        super(cProps);
    }

    receive(msg: Message): boolean {
        return this.handleDomDefault(msg);
    }

    render(parent: string) {
        document.getElementById(parent).innerHTML += `<br/>`;
        this.context.sender.tell(AbruComponent.Responses.Ok(), this.context.self);
    }
}