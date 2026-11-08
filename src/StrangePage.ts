import Message from "./seal/actors/Message";
import Props from "./seal/actors/Props";
import AbruComponent, {Event, SubscribeForEvents} from "./abru/components/AbruComponent";
import Future from "./seal/future/Future"
import VerticalLayout from "./abru/gui/VerticalLayout";
import Div from "./abru/dom/Div";
import Text from "./abru/dom/Text";
import Label from "./abru/gui/Label";
import HorizontalLayout from "./abru/gui/HorizontalLayout";
import Button from "./abru/gui/Button";
import TextEdit from "./abru/gui/TextEdit";
import B from "./abru/dom/B";
import P from "./abru/dom/P";
import A from "./abru/dom/A";
import Br from "./abru/dom/Br";
import DomComponent from "./abru/dom/DomComponent";

export default class StrangePage extends AbruComponent {

    static props(cProps: object) {
        return new Props(new StrangePage(cProps))
    }

    receive(msg: Message): boolean {
        if (!this.handleDefault(msg)) {
            if (msg instanceof Event) {
                console.log(msg)
            }
        }

        return true;
    }


    render(parent: string) {
        super.render(parent);
        /*ASX
            <HorizontalLayout marginTop="20px">
                <Button text="1" width="33%" height="100px" marginRight="20px"/>
                <Button text="2" width="33%" height="100px" marginRight="20px"/>
                <Button text="3" width="33%" height="100px"/>
            </HorizontalLayout>
         ASX*/
    }
}