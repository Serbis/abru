import {Option} from "../../common/Option";
import StringBuilder from "../../common/StringBuilder";

export class Attr {
    name: string;
    value: string;

    constructor(name: string, value: string) {
        this.name = name;
        this.value = value;
    }
}