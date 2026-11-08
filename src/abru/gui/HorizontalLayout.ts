import Message from "../../seal/actors/Message";
import {AddComponent, Ok, Render} from "../components/AbruComponent";
import * as $ from "jquery"
import Props from "../../seal/actors/Props";
import AbruComponent from "../components/AbruComponent";
import ActorRef from "../../seal/actors/ActorRef";
import {Option} from "../../common/Option";
import StringBuilder from "../../common/StringBuilder";

export default class HorizontalLayout extends AbruComponent {

    static props(cProps: object) {
        return new Props(new HorizontalLayout(cProps))
    }

    constructor(cProps: object) {
        super(cProps);

        this.renderParams["marginLeft"] = Option.from(cProps["marginLeft"]).getOrElse("0px");
        this.renderParams["marginRight"] = Option.from(cProps["marginRight"]).getOrElse("0px");
        this.renderParams["marginTop"] = Option.from(cProps["marginTop"]).getOrElse("0px");
        this.renderParams["marginBottom"] = Option.from(cProps["marginBottom"]).getOrElse("0px");
    }


    receive(msg: Message): boolean {
        if (msg instanceof Render) {
            this.render((<Render> msg).id)
        } else if (msg instanceof AddComponent) {
            this.addComponent((<AddComponent> msg).component);
        } else {
            return false;
        }

        return true;
    }

    render(parent: string) {
        let wrapperStyle = new StringBuilder()
            .put("margin: ")
            .put(this.renderParams["marginTop"].get()).put(" ")
            .put(this.renderParams["marginRight"].get()).put(" ")
            .put(this.renderParams["marginBottom"].get()).put(" ")
            .put(this.renderParams["marginLeft"].get()).put(";")
            .mkString();

        $(`#${parent}`).append(`<div style="display: flex; ${wrapperStyle}" id="${this.id}"></div>`);
        this.sOuterWrapper = $(`#${this.id}`);
        this.context.sender.tell(AbruComponent.Responses.Ok(), this.context.self);
    }

    addComponent(component: ActorRef) {
        let aData = { layoutType: "horizontal" };
        this.pipe(() => component.ask(new Render(this.id, aData), this.context.self), this.context.sender);

    }

    mounted() {
    }
}