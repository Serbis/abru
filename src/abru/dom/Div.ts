import Message from "../../seal/actors/Message";
import {AddComponent, Ok, Render} from "../components/AbruComponent";
import Props from "../../seal/actors/Props";
import ActorRef from "../../seal/actors/ActorRef";
import AbruComponent from "../components/AbruComponent";
import DomComponent from "./DomComponent";

export default class Div extends DomComponent {

    static props(cProps: object) {
        return new Props(new Div(cProps))
    }

    receive(msg: Message): boolean {
        return this.handleDomDefault(msg);
    }

    render(parent: string) {
        document.getElementById(parent).innerHTML += `<div ${this.getAttrsString()}></div>`;
        this.sOuterWrapper = document.getElementById(this.id);
        this.context.sender.tell(AbruComponent.Responses.Ok(), this.context.self);
    }

    addComponent(component: ActorRef) {
        this.pipe(() => component.ask(new Render(this.id), this.context.self), this.context.sender);
    }
}