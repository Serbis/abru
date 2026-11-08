const peg = require("pegjs");
const fs = require("fs");
let parser;
let endSplicer = /ASX\*\//g;
let startSplicer = /\/\*ASX/g;

module.exports = function(content) {
    if (!parser) {
        let grammar = fs.readFileSync(__dirname + "/asx.pegjs", "utf8");
        try {
            parser = peg.generate(grammar);
            console.log("Asx grammar loaded");
        } catch (e) {
            console.error("Asx grammar load error!");
            throw e;
        }
    }

    let starts = [];
    let ends = [];
    let match;
    while ((match = startSplicer.exec(content)) != null) {
        starts.push(match.index);
    }

    while ((match = endSplicer.exec(content)) != null) {
        ends.push(match.index);
    }

    if (starts.length === 0)
        return content;

    let fragments = [];

    while (starts.length > 0) {
        let fStart = starts.shift();
        let fEnd = ends.shift();
        fragments.push({start: fStart, end: fEnd + 5, code: content.substring(fStart + 5, fEnd - 5)})
    }

    let replacements = [];

    while (fragments.length > 0) {
        let frag = fragments.shift();
        let rawAst;
        try {
            rawAst = parser.parse(frag.code);
        } catch (e) {
            console.error(`Parse error at fragment\n '${frag.code}'`);
            throw e;
        }
        let ast = AstNode.fromRaw(rawAst);
        ast.root = true;
        replacements.push({start: frag.start, end: frag.end, code: ast.gen()[0]});
    }

    let resultContent = content;

    while (replacements.length > 0) {
        let rep = replacements.shift();
        let left = resultContent.slice(0, rep.start);
        let right = resultContent.slice(rep.end, resultContent.length);
        resultContent = left + rep.code + right;
    }

    //console.log(resultContent);

    return resultContent;
};

class AstNode {

    constructor(component, attrs, inner) {
        this.root = false;
        this.component = component;
        this.attrs = attrs;
        this.inner = inner;
    }

    static fromRaw(raw) {
        let component = raw.component;
        let attrs = [];
        if (raw.attrs)
            attrs = raw.attrs;
        let inner = [];

        if (raw.inner) {
            for (let i = 0; i < raw.inner.length; i++) {
                inner.push(AstNode.fromRaw(raw.inner[i]))
            }
        }

        let node = new AstNode(component, attrs, inner);


        return node;
    }

    gen() {
        let code = "";
        let actorName;
        let realId = this.attrs.find((v) => v.name === "id");
        let idExist = realId;

        if (!realId) {
            realId = this.makeId(10);
        } else {
            realId = realId.value;
        }

        actorName = `, "${realId}"`;

        // --- Inner props ---
        let props = "{";

        props += `id: "${realId}",`;
        let inProps = this.attrs.filter((v) => v.name.charAt(0) !== '_' && v.name !== "id");

        while (inProps.length > 0) {
            let p = inProps.shift();
            if (p.type === "simple") {
                props += `${p.name}: "${p.value}",`
            } else if (p.type === "code") {
                props += `${p.name}: ${p.value},`
            }

        }

        props = props.slice(0, inProps.length - 1);
        props += "}";

        // --- Outer props ----

        let outerProps = "{";

        let oProps = this.attrs.filter((v) => v.name.charAt(0) === '_');

        while (oProps.length > 0) {
            let p = oProps.shift();
            if (p.type === "simple") {
                outerProps += `${p.name}: "${p.value}",`
            } else if (p.type === "code") {
                outerProps += `${p.name}: ${p.value},`
            }
        }

        //outerProps = outerProps.slice(0, outerProps.length - 1);
        outerProps += "}";

        console.log(outerProps);



        if (this.root) {
            code += `let profStart = Date.now();\n`;
            code += `let refCache = {};\n`;
            code += `let sender = this.context.sender;\n`;
            code += `let self = this.context.self;\n`;
        }



        code += `let ${realId} = this.context.system.actorOf(${this.component}.props(${props})${actorName});\n`;
        code += `refCache["${realId}"] = ${realId};\n`;
        //if (idExist)
        code += `this.internals["${realId}"] = ${realId};\n`;


        if (this.inner.length === 0) {
            if (this.root)
                code += `${realId}.tell(AbruComponent._Commands.Render(this.id));\n`;
        } else {
            //code += "Future.async(() => 0, executor)\n";

            let first = true;

            for (let i = 0; i < this.inner.length; i++) {
                let v = this.inner[i];

                if (i === 0) {
                    if (this.root) {
                        code += `${realId}.ask(AbruComponent._Commands.Render(this.id))\n`;
                    } else {
                        code += `return Future.async(() => 0, this.context.system.dispatcher)\n`;
                    }
                }


                let g = v.gen();
                if (v.inner.length === 0) {
                    code += `.flatMap((_) => {\n`;
                    code += g[0];
                    code += `return ${realId}.ask(AbruComponent._Commands.AddComponent(${g[1]}, ${g[2]}), this.context.self);\n`;
                    code += `})\n`;
                } else {
                    code += `.flatMap((_) => {\n`;
                    code += g[0].split("\n")[0] + "\n";
                    code += `return ${realId}.ask(AbruComponent._Commands.AddComponent(${g[1]}, ${g[2]}), this.context.self)\n`;
                    code += `.flatMap((_) => {\n`;
                    let inter = g[0].split("\n");
                    code += inter.slice(1, inter.length).join("\n") + "\n";
                    code += `})\n`;
                    code += `})\n`;
                }

                //Subscribe for events for inner component
                let events = v.attrs.find((v) => v.name === "events");

                if (events) {
                    if (events.value.length > 0) {
                        let evc = "";
                        while (events.value.length > 0) {
                            evc += `"${events.value.shift()}",`
                        }
                        evc = evc.slice(0, evc.length - 1);
                        code += `.flatMap((_) => {\n`;
                        code += `return refCache["${g[1]}"].ask(AbruComponent._Commands.SubscribeForEvents([${evc}], self))\n`;
                        code += `})\n`;
                    }

                }

            }
        }

        if (this.root) {
            //Subscribe for events for root component
            let events = this.attrs.find((v) => v.name === "events");

            if (events) {
                if (events.value.length > 0) {
                    let evc = "";
                    while (events.value.length > 0) {
                        evc += `"${events.value.shift()}",`
                    }
                    evc = evc.slice(0, evc.length - 1);
                    code += `.flatMap((_) => {\n`;
                    code += `return ${realId}.ask(AbruComponent._Commands.SubscribeForEvents([${evc}], self))\n`;
                    code += `})\n`;
                }

            }

            //Final result of total flatMap tree
            code += `.onComplete((_) => {\n`;
            //code += `console.log("Render time = " + (Date.now() - profStart).toString());\n`;
            code += `sender.tell(AbruComponent.Responses.Ok(), this.context.self);\n`;
            code += `})\n`;
        }

        return [code, realId, outerProps];
    }

    makeId(length) {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}