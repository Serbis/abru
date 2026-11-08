Start = _ comp:Component _ { return comp; }

Component = PlainComponent / ContainerComponent

PlainComponent 
    = "<" header:ComponentHeader "/>" _ {
        return {
            component: header.id,
            attrs: header.attrs
        }
    }

ContainerComponent
    = "<" header:ComponentHeader ">" _ inner:Component+ _ "</" end:Ident ">" _ {
    	 return {
              component: header.id,
              attrs: header.attrs,
              inner: inner
          }
    }

ComponentHeader
    = id:Ident _ attrs:Attr*  {
        return { id: id, attrs: attrs };
    }


Attr = SimpleAttr / EnumAttr / CodeAttr

SimpleAttr
    = name:Ident+ "=" value:LiteralAttrValue+ _ {
        return {type: "simple", name: name.join(""), value: value.join("")};
    }

EnumAttr
    = name:Ident+ "=" value:EnumAttrValue _ {
        return {type: "enum", name: name.join(""), value: value};
    }

CodeAttr
    = name:Ident+ "=" value:CodeAttrValue _ {
        return {type: "code", name: name.join(""), value: value};
    }

LiteralAttrValue = '"' value:[a-zA-Z0-9_*/:.% ]+ '"' { return value.join(""); }

EnumAttrValue
    = "[" _ value:EnumSeq+ _ "]" {
        let arr = [];
        for (let i = 0; i < value.lenght; i++) {
            arr.push(value[i][0].join(""));
        };
        return value;
    }

CodeAttrValue = "#" value:[a-zA-Z0-9`~!@№$;%^:&?*()-_=+\[\]{}\|/'<>.," ]* "#"  { return value.join(""); }

EnumSeq = value:[a-zA-Z]+ _ ","? _  { return value.join(""); }

Ident = value:[a-zA-Z_]+ { return value.join(""); }

_ "whitepace" = [ \t\n\r]*