import {Actor} from "../../seal/actors/Actor";
import Message from "../../seal/actors/Message";
import ActorRef from "../../seal/actors/ActorRef";
import * as $ from "jquery"
import Subscriptions from "./Subscriptions";


export default abstract class AbruComponent extends Actor {
    sOuterWrapper;
    id: string;
    subscriptions = new Subscriptions();
    internals = {};
    renderParams = {};

    static _Commands = {
        Render: (id) => new Render(id),

        /** Remove dom of the current component and stop all component child's */
        Umount: () => new Umount(),
        AddComponent: (component, options) => new AddComponent(component, options),
        Event: (event, payload) => new Event(event, payload),
        SubscribeForEvents: (events, ref) => new SubscribeForEvents(events, ref)
    };

    static Responses = {
        Ok: () => new Ok(),
    };

    constructor(cProps: object) {
        super();

        if (cProps["id"] == null) {
            this.id = (Math.floor(Date.now() * Math.random())).toString();
        } else {
            this.id = cProps["id"];
        }
    }


    postStop() {
        /*console.log(`Sopped = ${this.context.self.path().toString()}`);
        for (let child in this.internals) {
            this.context.system.stop(this.internals[child]);
        }
        this.sOuterWrapper.remove();*/
    }

    handleDefault(msg: Message): boolean {
        if (msg instanceof Render) {
            this.render((<Render> msg).id)
        } else if (msg instanceof Umount) {
            this.sOuterWrapper.remove();
            for (let child in this.internals) {
                this.context.system.stop(this.internals[child]);
            }
            this.internals = {};
            this.context.sender.tell(AbruComponent.Responses.Ok(), this.context.self);
        } else if (msg instanceof AddComponent) {
            this.addComponent((<AddComponent> msg).component, (<AddComponent> msg).options);
        } else {
            return false;
        }

        return true;
    }

    /** Handle dom event, mapped to the component event and send Event message with this event
     *  to the all subscribers
     *
     * @param {string} event component event, for example OnClick
     * @param {object} payload data from the event dom event handler
     */
    handleDomEvent(event: string, payload: object) {
        let subs = this.subscriptions.getSubscribers(event);
        subs.forEach((s) => s.tell(new Event(event, payload), this.context.self));
    }

    render(parent: string) {
        $(`#${parent}`).append(`<div id="${this.id}"></div>`);
        this.sOuterWrapper = $(`#${this.id}`);
    };

    addComponent(component: ActorRef, options: object) {}

    mounted() {}

}

export class Render extends Message {
    id: string;
    aData: object;

    constructor(id: string, aData: object = {}) {
        super();
        this.id = id;
        this.aData = aData;
    }
}

export class Ok extends Message {}

export class Umount extends Message {}

export class AddComponent extends Message {
    component: ActorRef;
    options: object;

    constructor(component: ActorRef, options: object) {
        super();
        this.component = component;
        this.options = options;
    }
}

export class Event extends Message {
    event: string;
    payload: object;

    constructor(event: string, payload: object) {
        super();
        this.event = event;
        this.payload = payload;
    }
}

export class SubscribeForEvents extends Message {
    events: Array<string>;
    ref: ActorRef;

    constructor(events: Array<string>, ref: ActorRef) {
        super();
        this.events = events;
        this.ref = ref;
    }
}


