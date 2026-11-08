import Message from "./seal/actors/Message";
import Props from "./seal/actors/Props";
import AbruComponent, {Event, SubscribeForEvents} from "./abru/components/AbruComponent";
import Future from "./seal/future/Future"
import Router from "./abru/gui/Router";
import RegistrationPage from "./RegistrationPage";
import StrangePage from "./StrangePage";
import VerticalLayout from "./abru/gui/VerticalLayout";
import Footer from "./Footer";


export default class SimpleApp extends AbruComponent {

    static props(cProps: object) {
        return new Props(new SimpleApp(cProps))
    }

    receive(msg: Message): boolean {
        if (!this.handleDefault(msg)) {
            if (msg instanceof Event) {
                if (this.context.sender.equals(this.internals["footer"]) && (<Event> msg).event == "ChangePage") {
                    this.handleChangePageEvent((<Event> msg).payload["to"])
                }
            }
        }

        return true;
    }

    handleChangePageEvent(to: string) {
        this.internals["router"].tell(Router.Commands.SwitchTo(to))
    }

    render(parent: string) {
        super.render(parent);

        /*ASX
            <VerticalLayout>
                <Footer id="footer" events=[ ChangePage ]/>
                <Router id="router">
                    <RegistrationPage id="regPage" _path="reg"/>
                    <StrangePage id="strangePage" _path="strange" _default="true"/>
                </Router>
            </VerticalLayout>
         ASX*/
    }
}