export default class StringBuilder {
    elems: Array<string> = [];

    constructor(str: string = "") {
        this.elems.push(str);
    }

    put(str: string): StringBuilder {
        this.elems.push(str);

        return this;
    }

    mkString(): string {
        return this.elems.join("");
    }
}