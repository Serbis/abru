import Comparable from "../../common/Comparable";
import Object from "../../common/Object";

export default abstract class Message extends Object implements Comparable {
    equals(obj: Comparable): boolean {
        return JSON.stringify(this) === JSON.stringify(obj);
    }


    /*toString(): string {
        for (let property in this) {
            if (this.hasOwnProperty(property)) {
                console.log(property)
            }
        }
        return this.constructor.name + " " + JSON.stringify(this);
    }*/



}