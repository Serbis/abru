
export default abstract class Object {
    toString(): string {
        let str = this.constructor.name + " { ";
        for (let property in this) {
            if (this.hasOwnProperty(property)) {
                str = `${str}${property}: ${this[property].toString()}, `;
            }
        }

        str = str.slice(0, str.length - 1) + " }";

        return str;
    }
}