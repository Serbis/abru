/** Actor path representation inside the actors system */
import Comparable from "../../common/Comparable";

export default class ActorPath implements Comparable {

    /** Actor name. This value is set in the Props constructor or generated automatically by the
     *  system, if first requirement does not satisfied */
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    toString() {
        return "/" + this.name;
    }

    equals(obj: ActorPath): boolean {
        return this.name == obj.name;
    }


}