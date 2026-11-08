import Message from "../../seal/actors/Message";
import {AddComponent, Ok, Render} from "../components/AbruComponent";
import * as $ from "jquery"
import Props from "../../seal/actors/Props";
import AbruComponent from "../components/AbruComponent";
import ActorRef from "../../seal/actors/ActorRef";
import {Option} from "../../common/Option";
import StringBuilder from "../../common/StringBuilder";

export default class Router extends AbruComponent {
    current: ActorRef;
    routes: Array<Route> = [];

    static props(cProps: object) {
        return new Props(new Router(cProps))
    }

    static Commands = {
      SwitchTo: (path) => new SwitchTo(path)
    };

    constructor(cProps: object) {
        super(cProps);
    }


    receive(msg: Message): boolean {
        if (msg instanceof Render) {
            this.render((<Render> msg).id)
        } else if (msg instanceof AddComponent) {
            this.addComponent((<AddComponent> msg).component, (<AddComponent> msg).options);
        } else if (msg instanceof SwitchTo) {
            this.switchTo((<SwitchTo> msg).path);
        } else {
            return false;
        }

        return true;
    }

    switchTo(path: string) {
        this.context.system.printDebugActorList();
        let sender = this.context.sender;
        this.current.ask(AbruComponent._Commands.Umount())
            .onComplete((_) => {
                let r = this.routes.find((v) => v.path == path);
                if (r) {
                    this.current = r.ref;
                } else {
                    console.error(`Routes does not exist '${path}'`)
                }
                r.ref.ask(new Render(this.id), sender).onComplete(() => {})
            });

    }

    render(id: string) {
        $(`#${id}`).append(`<div id="${this.id}"></div>`);
        this.context.sender.tell(AbruComponent.Responses.Ok(), this.context.self);
    }

    addComponent(component: ActorRef, options: object) {
        this.routes.push(new Route(options["_path"], component));
        if (options["_default"] == "true") {
            this.current = component;
            this.pipe(() => component.ask(new Render(this.id), this.context.self), this.context.sender);
        } else {
            this.context.sender.tell(AbruComponent.Responses.Ok(), this.context.self);
        }
    }
}

//-------------- MESSAGES --------------

export class SwitchTo extends Message {
    path: string;

    constructor(path: string) {
        super();
        this.path = path;
    }
}

//-------------- INTERNAL API --------------

class Route {
    path: string;
    ref: ActorRef;

    constructor(path: string, ref: ActorRef) {
        this.path = path;
        this.ref = ref;
    }
}