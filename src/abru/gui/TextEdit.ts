import Message from "../../seal/actors/Message";
import {Ok, Render} from "../components/AbruComponent";
import * as $ from "jquery"
import Props from "../../seal/actors/Props";
import AbruComponent from "../components/AbruComponent";
import {Option} from "../../common/Option";
import StringBuilder from "../../common/StringBuilder";

export default class TextEdit extends AbruComponent {
    text: string = "";

    static props(cProps: object) {
        return new Props(new TextEdit(cProps))
    }

    constructor(cProps: object) {
        super(cProps);

        this.renderParams["marginLeft"] = Option.from(cProps["marginLeft"]).getOrElse("0px");
        this.renderParams["marginRight"] = Option.from(cProps["marginRight"]).getOrElse("0px");
        this.renderParams["marginTop"] = Option.from(cProps["marginTop"]).getOrElse("0px");
        this.renderParams["marginBottom"] = Option.from(cProps["marginBottom"]).getOrElse("0px");

        this.text = Option.from(cProps["text"]).getOrElse("").get();
    }


    receive(msg: Message): boolean {
        if (msg instanceof Render) {
            this.render((<Render> msg).id)
        } else {
            return false;
        }

        return true;
    }

    render(parent: string) {
        super.render(parent);
        let wrapperStyle = new StringBuilder()
            .put("margin: ")
            .put(this.renderParams["marginTop"].get()).put(" ")
            .put(this.renderParams["marginRight"].get()).put(" ")
            .put(this.renderParams["marginBottom"].get()).put(" ")
            .put(this.renderParams["marginLeft"].get()).put(";")
            .mkString();

        let sParent = $(`#${parent}`);
        sParent.append(`<div id="${this.id}_wrapper" style="${wrapperStyle}"><input class="abru-text_edit-default" id="${this.id}_input" value="${this.text}"/></div>`);
        let sWrapper = $(`#${this.id}_wrapper`);
        let sInput = $(`#${this.id}_input`);
        sWrapper.height(`${sInput.height() + 5}px`);
        this.context.sender.tell(AbruComponent.Responses.Ok(), this.context.self);
    }

    mounted() {
    }
}