import Message from "../../seal/actors/Message";
import Props from "../../seal/actors/Props";
import AbruComponent from "../components/AbruComponent";
import DomComponent from "./DomComponent";

export default class B extends DomComponent {
    value: string;

    static props(cProps: object) {
        return new Props(new B(cProps))
    }

    constructor(cProps: object) {
        super(cProps);

        this.value = cProps["value"];
    }

    receive(msg: Message): boolean {
        return this.handleDomDefault(msg);
    }

    render(parent: string) {
        document.getElementById(parent).innerHTML += `<b>${this.value}</b>`;
        this.context.sender.tell(AbruComponent.Responses.Ok(), this.context.self);
    }
}