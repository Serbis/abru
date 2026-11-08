import ActorSystem from "./seal/actors/ActorSystem";
import TestProbe from "./seal/testkit/TestProbe";
import Div from "./abru/dom/Div";
import Props from "./seal/actors/Props";
import Label from "./abru/gui/Label";
import PlainLayout from "./abru/gui/PlainLayout";
import HorizontalLayout from "./abru/gui/HorizontalLayout";
import {None, Option, Some} from "./common/Option";
import CompletablePromise from "./seal/future/CompletablePromise";
import AsyncPromise from "./seal/future/AsyncPromise";
import Future from "./seal/future/Future";
import {PoisonPill} from "./seal/actors/Actor";
import RegistrationPage from "./RegistrationPage";
import VerticalLayout from "./abru/gui/VerticalLayout";
import AbruComponent from "./abru/components/AbruComponent";
import TextEdit from "./abru/gui/TextEdit";
import Button from "./abru/gui/Button";
import SimpleApp from "./SimpleApp";

let system = new ActorSystem();

//let fooActor = system.actorOf(FooActor.props("xxx"));
//system.actorOf(BooActor.props("yyy", fooActor));



document.addEventListener("DOMContentLoaded", () => {
    let executor = system.dispatcher;

    /*this.context = {};
    this.context.system = system;
    this.id = "root";
    this.internals = {};

    let ast = new AstNode("VerticalLayout", {id: "vertical"}, [
        new AstNode("HorizontalLayout", {id: "horizontal"}, [
            new AstNode("Button", {id: "btnCancel", text: "Cancel"}, []),
            new AstNode("Button", {id: "btnOk", text: "OK"}, []),
        ]),
        new AstNode("Label", {text: "Name"}, []),
        new AstNode("TextEdit", {id: "teName"}, []),
        new AstNode("Label", {text: "Name"}, []),
        new AstNode("TextEdit", {id: "tePassword"}, []),

    ]);
    ast.root = true;*/



    let simpleApp = system.actorOf(SimpleApp.props({id: "simple_app"}), "simple_app");
    simpleApp.ask(AbruComponent._Commands.Render("root"))
        .onComplete(() => {});



    /*let foo = system.actorOf(FooActor.props("x"), "foo");
    foo.ask(FooActor.commands.Ping("xxx"))
        .onComplete((v) => {
            if (v.isSuccess()) {
                console.log(`Got answer = ${v.get().toString()}`)
            } else {
                console.log(`Error = ${v.failed().get().message}`);
            }
        })*/


    /*let foo = system.actorOf(FooActor.props("x"), "foo");
    foo.tell(FooActor.commands.Ping("aaa"));
    foo.tell(FooActor.commands.Ping("bbb"));
    foo.tell(new PoisonPill());
    foo.tell(FooActor.commands.Ping("ccc"));
    foo.tell(FooActor.commands.Ping("ddd"));
    foo.tell(FooActor.commands.Ping("eee"));*/

    //setTimeout(() => {
    //    foo.tell(BooActor.commands.Pong("zzz"));
    //}, 4000)

    /*Future.async(() => 100, executor)
        .map(v => {
            console.log(`map1 = ${v}`);
            return v + 100;
        })
        .flatMap(v => {
            console.log(`flatMap1 = ${v}`);
            return Future.async(() => `stringed value = ${v}`, executor)
                .map((v) => {
                    throw new Error("Ooooops!");
                    return v + " zzz";
                });
        })
        .map(v => {
            console.log(`map2 = ${v}`);
            return v + " xxx";
        })
        .onComplete((v) => {
            if (v.isSuccess()) {
                console.log(`onComplete:success = ${v.get()}`)
            } else {
                console.log(`onComplete:failed = ${v.failed().get()}`)
            }

        });*/

    /*console.log("Pre start code");
    p.success(100);
    console.log("First complete is ok");
    p.success(100);*/

    /*let p = FutureOld.Promise<number>(executor)
        .map((v) => {
            throw new Error("Error from map");
            console.log(`map1 v = ${v}`);
            return v + 100;
        })
        .onSuccess((v: number) => {
            console.log("onSuccess");
            console.log(`Result = ${v}`)
        })
        .onFailed((e) => {
            console.log("onFailed");
            console.log(`Error = ${e.message}`)
        });



    console.log("Some before execution code...");
    p.success(99);*/

    /*new Future<number>(() => {
        console.log("calc");
        return 99;
    }, executor)
        .map((v) => {
            console.log(`map1 v = ${v}`);
            return v + 100;
        })
        .map((v) => {
            console.log(`map2 v = ${v}`);
            return v + 100;
        })
        .map((v) => {
            throw new Error("My error");
            console.log(`map3 v = ${v}`);
            return v + 100;
        })
        .map((v) => {
            console.log(`map4 v = ${v}`);
            return v + 100;
        })
        .onFailed((e) => {
            console.log("onFailed");
            console.log(`Error = ${e.message}`)
        })
        .onSuccess((v) => {
            console.log("onSuccess");
            console.log(`Result = ${v}`)
        })


        .run();*/



    /*let top = system.actorOf(Div.props({id: "top"}), "top");
    top.tell(new Render("root"));

    let registrationPage = system.actorOf(RegistrationPage.props({id: "registration_page"}), "registration_page");
    top.tell(new AddComponent(registrationPage));*/


    /*let horizontal = system.actorOf(HorizontalLayout.props(), "horizontal");
    let plainA = system.actorOf(PlainLayout.props(), "plainA");
    let plainB = system.actorOf(PlainLayout.props(), "plainB");
    let plainC = system.actorOf(PlainLayout.props(), "plainC");
    let labelA = system.actorOf(Label.props("A"), "labelA");
    let labelB = system.actorOf(Label.props("B"), "labelB");
    let labelC = system.actorOf(Label.props("C"), "labelC");


    top.tell(new Render("root"));
    top.ask(new AddComponent(horizontal))
        .map((_) => {
            horizontal.ask(HorizontalLayout.AddComponent(plainA, 33, null))
                .map((_) => {
                    plainA.tell(PlainLayout.AddComponent(labelA));
                });
            horizontal.ask(HorizontalLayout.AddComponent(plainB, 33, null))
                .map((_) => {
                    plainB.tell(PlainLayout.AddComponent(labelB));
                });
            horizontal.ask(HorizontalLayout.AddComponent(plainC, 33, null))
                .map((_) => {
                    plainC.tell(PlainLayout.AddComponent(labelC));
                });
        });*/

    //plainA.tell(PlainLayout.AddComponent(labelA));
    //plainB.tell(PlainLayout.AddComponent(labelB));
    //plainC.tell(PlainLayout.AddComponent(labelC));



   // let div0 = system.actorOf(Div.props("div-L0"));
   // let div1 = system.actorOf(Div.props("div-L1.0"));
   // let div2 = system.actorOf(Div.props("div-L1.1"));
   //div0.tell(AbruMessages.Render("root"));
   //div0.tell(AbruMessages.AddComponent(div1));
   //div0.tell(AbruMessages.AddComponent(div2));

});


/*setTimeout(() => {
    let probe = new TestProbe(system);
    let target = system.actorOf(FooActor.props("xxx"));

    probe.send(target, FooActor.commands.Ping("xxx"));
    probe.expectMsg(BooActor.commands.Pong("xxx"), 1000).then(
        v => console.log(`Test result is '${v}'`),
        r => console.log(`Timeout`)
    )
}, 1000);*/

system.run();
