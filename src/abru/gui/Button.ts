import Message from "../../seal/actors/Message";
import {AddComponent, Ok, Render, SubscribeForEvents} from "../components/AbruComponent";
import * as $ from "jquery"
import Props from "../../seal/actors/Props";
import AbruComponent from "../components/AbruComponent";
import Subscriptions from "../components/Subscriptions";
import ActorRef from "../../seal/actors/ActorRef";
import {Option} from "../../common/Option";
import StringBuilder from "../../common/StringBuilder";


export default class Button extends AbruComponent {

    sParent;
    sWrapper;
    text: string = "";

    static props(cProps: object) {
        return new Props(new Button(cProps))
    }

    constructor(cProps: object) {
        super(cProps);

        this.renderParams["marginLeft"] = Option.from(cProps["marginLeft"]).getOrElse("0px");
        this.renderParams["marginRight"] = Option.from(cProps["marginRight"]).getOrElse("0px");
        this.renderParams["marginTop"] = Option.from(cProps["marginTop"]).getOrElse("0px");
        this.renderParams["marginBottom"] = Option.from(cProps["marginBottom"]).getOrElse("0px");
        this.renderParams["width"] = Option.from(cProps["width"]).getOrElse("_");
        this.renderParams["height"] = Option.from(cProps["height"]).getOrElse("_");
        this.renderParams["weight"] = Option.from(cProps["weight"]).getOrElse("_");


        this.text = cProps["text"];
    }


    receive(msg: Message): boolean {
        if (msg instanceof Render) {
            this.render((<Render> msg).id)
        } else if (msg instanceof SubscribeForEvents) {
            this.subscribeForEvents((<SubscribeForEvents>msg).events, (<SubscribeForEvents>msg).ref);
        } else {
            return false;
        }

        return true;
    }

    subscribeForEvents(events: Array<string>, ref: ActorRef) {
        events.forEach((event) => {
            this.subscriptions.subscribe(event, ref);

            if (event === "OnClick")
                this.sWrapper.click((e) => this.handleDomEvent("OnClick", e));
        });

        this.context.sender.tell(AbruComponent.Responses.Ok(), this.context.self);
    }

    render(parent: string) {
        super.render(parent);
        let wrapperStyle = new StringBuilder()
            .put("margin: ")
            .put(this.renderParams["marginTop"].get()).put(" ")
            .put(this.renderParams["marginRight"].get()).put(" ")
            .put(this.renderParams["marginBottom"].get()).put(" ")
            .put(this.renderParams["marginLeft"].get()).put(";");

        if (this.renderParams["height"] != "_") {
            wrapperStyle.put("height: ")
                .put(this.renderParams["height"].get()).put(";");
        }

        if (this.renderParams["width"] != "_") {
            wrapperStyle.put("width: ")
                .put(this.renderParams["width"].get()).put(";");
        }


        let style = wrapperStyle.mkString();

        this.sParent = $(`#${parent}`);
        this.sParent.append(`<div style="${style}" class="abru-button-default" id="${this.id}_wrapper"><div><p>${this.text}</p></div></div>`);
        this.sWrapper = $(`#${this.id}_wrapper`);

        this.context.sender.tell(AbruComponent.Responses.Ok(), this.context.self);
    }

    mounted() {
    }
}

