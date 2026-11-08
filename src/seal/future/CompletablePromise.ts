import Promise from "./Promise";
import Try from "../../common/Try";
import Future from "./Future";

/** This type of promise is intended to be filled by the application code, which should call the
 *  success or failure methods on it. After that, the transferred value will be placed in the
 *  future.
 *
 *  Example:
 *
 *  let p = new CompletablePromise<number>();
 *  let fut = p.future;
 *  fut.onComplete((v) => {
 *      log("Ok, result is given")
 *  })
 *
 *  // p now may go away, say to another function, actor or other future, where it will be completed
 *
 *  p.success(1000);
 *
 **/
export default class CompletablePromise<T> extends Promise<T> {

    constructor() {
        super();
        this.future = new Future<T>();
    }

    tryComplete(result: Try<T>): boolean {
        if (!this.future.isCompleted()) {
            this.future.complete(result);
            return true;
        } else {
            return false;
        }
    }
}