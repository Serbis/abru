import Message from "./seal/actors/Message";
import Props from "./seal/actors/Props";
import AbruComponent, {Event, SubscribeForEvents} from "./abru/components/AbruComponent";
import Future from "./seal/future/Future"
import HorizontalLayout from "./abru/gui/HorizontalLayout";
import Button from "./abru/gui/Button";
import ActorRef from "./seal/actors/ActorRef";

export default class Footer extends AbruComponent {

    static props(cProps: object) {
        return new Props(new Footer(cProps))
    }

    receive(msg: Message): boolean {
        if (!this.handleDefault(msg)) {
            if (msg instanceof Event) {
                if (this.context.sender.equals(this.internals["btnToStrange"])) {
                    this.produceChangePageEvent("strange")
                } else if (this.context.sender.equals(this.internals["btnToReg"])) {
                    this.produceChangePageEvent("reg")
                }
            } else if (msg instanceof SubscribeForEvents) {
                this.subscribeForEvents((<SubscribeForEvents>msg).events, (<SubscribeForEvents>msg).ref);
            } else {
                return false;
            }
        }

        return true;
    }

    subscribeForEvents(events: Array<string>, ref: ActorRef) {
        events.forEach((event) => {
            this.subscriptions.subscribe(event, ref);
        });

        this.context.sender.tell(AbruComponent.Responses.Ok(), this.context.self);
    }

    produceChangePageEvent(page: string) {
        let subs = this.subscriptions.getSubscribers("ChangePage");
        subs.forEach((s) => s.tell(new Event("ChangePage", {to: page}), this.context.self));
    }


    render(parent: string) {
        super.render(parent);
        /*ASX
            <HorizontalLayout>
	            <Button id="btnToStrange" text="STRANGE" events=[ OnClick ]/>
	            <Button id="btnToReg" text="REG" events=[ OnClick ]/>
            </HorizontalLayout>
         ASX*/
    }
}