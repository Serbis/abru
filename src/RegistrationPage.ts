import Message from "./seal/actors/Message";
import Props from "./seal/actors/Props";
import AbruComponent, {Event, SubscribeForEvents} from "./abru/components/AbruComponent";
import Future from "./seal/future/Future"
import VerticalLayout from "./abru/gui/VerticalLayout";
import Label from "./abru/gui/Label";
import HorizontalLayout from "./abru/gui/HorizontalLayout";
import Button from "./abru/gui/Button";
import TextEdit from "./abru/gui/TextEdit";

export default class RegistrationPage extends AbruComponent {
    userName = "Hren";

    static props(cProps: object) {
        return new Props(new RegistrationPage(cProps))
    }

    receive(msg: Message): boolean {
        if (!this.handleDefault(msg)) {
            if (msg instanceof Event) {
                if (this.context.sender.equals(this.internals["btnOk"])) {
                    console.log("Handled event from btnOk")
                }
            } else {
                return false;
            }
        }

        return true;
    }

    //TODO при нескольких формах не работает event биндинг

    render(parent: string) {
        super.render(parent);
        /*ASX
            <VerticalLayout>
	            <Label text="User"/>
	            <TextEdit id="teUser" text=# this.userName # marginTop="10px"/>
	            <Label text="Password" marginTop="30px"/>
	            <TextEdit id="tePassword" text="*******" marginTop="10px"/>
	            <HorizontalLayout marginTop="20px">
		            <Button text="Cancel"/>
		            <Button id="btnOk" text="Ok" marginLeft="20px"/>
	            </HorizontalLayout>
            </VerticalLayout>

         ASX*/
    }
}