import Message from "../../seal/actors/Message";
import {AddComponent, Event, Ok, Render, SubscribeForEvents} from "../components/AbruComponent";
import Props from "../../seal/actors/Props";
import ActorRef from "../../seal/actors/ActorRef";
import AbruComponent from "../components/AbruComponent";
import StringBuilder from "../../common/StringBuilder";
import {Option} from "../../common/Option";
import {Attr} from "./Utils";

export default abstract class DomComponent extends AbruComponent {
    attrs: Array<Attr> = [];

    static __Commands = {
        SetAttribute: (name, value) => new SetAttribute(name, value),
        GetAttribute: (name) => new GetAttribute(name),
        AddClass: (clazz) => new AddClass(clazz),
        RemoveClass: (clazz) => new RemoveClass(clazz)
    };

    static __Responses = {
        AttributeValue: (value) => new AttributeValue(value)
    };

    constructor(cProps: object) {
        super(cProps);

        let attrs: Array<Attr> = [];
        for (let p in cProps) {
            attrs.push(new Attr(p, cProps[p]));
        }

        this.attrs = attrs;
    }

    handleDomDefault(msg: Message): boolean {
        if (!this.handleDefault(msg)) {
            if (msg instanceof SetAttribute) {
                this.sOuterWrapper.setAttribute((<SetAttribute> msg).name, (<SetAttribute> msg).value);
                this.context.sender.tell(AbruComponent.Responses.Ok(), this.context.self);
            }  else if (msg instanceof GetAttribute) {
                let value = this.sOuterWrapper.getAttribute((<GetAttribute> msg).name);
                this.context.sender.tell(DomComponent.__Responses.AttributeValue(value), this.context.self);
            } else if (msg instanceof AddClass) {
                this.sOuterWrapper.classList.add((<AddClass> msg).clazz);
                this.context.sender.tell(AbruComponent.Responses.Ok(), this.context.self);
            } else if (msg instanceof RemoveClass) {
                this.sOuterWrapper.classList.remove((<AddClass> msg).clazz);
                this.context.sender.tell(AbruComponent.Responses.Ok(), this.context.self);
            } else if (msg instanceof SubscribeForEvents) {
                let sub = (<SubscribeForEvents> msg).ref;
                (<SubscribeForEvents> msg).events.forEach((event) => {
                    this.sOuterWrapper[event] = (e) => {
                        sub.tell(new Event(event, e));
                    }
                });
                this.context.sender.tell(AbruComponent.Responses.Ok(), this.context.self);
            } else {
                return false;
            }

            return true;
        }

        return true;
    }

    getAttrsString(): string {
        let sb = new StringBuilder();

        this.attrs.forEach((v) => {
            sb.put(v.name)
                .put("=")
                .put("\"")
                .put(v.value)
                .put("\"")
                .put(" ")
        });

        return sb.mkString();
    }
}

export class SetAttribute extends Message {
    name: string;
    value: string;

    constructor(name: string, value: string) {
        super();
        this.name = name;
        this.value = value;
    }
}

export class GetAttribute extends Message {
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }
}

export class AttributeValue extends Message {
    value: string;

    constructor(value: string) {
        super();
        this.value = value;
    }
}

export class AddClass extends Message {
    clazz: string;

    constructor(clazz: string) {
        super();
        this.clazz = clazz;
    }
}

export class RemoveClass extends Message {
    clazz: string;

    constructor(clazz: string) {
        super();
        this.clazz = clazz;
    }
}
