import Promise from "./Promise";
import Try from "../../common/Try";
import ExecutionContext from "../async/ExecutionContext";
import Future from "./Future";

/** This type of promise is designed to be filled by the function executed on the executor. For
 *  this reason, the call to the transferred function is asynchronous with all the cautions that
 *  follow from it.
 *
 *  Example:
 *
 *  let p = new AsyncPromise<number>(() => 1000, executor);
 *  let fut = p.future;
 *
 *  // Next callback will be called after executor processed passed function and complete the future
 *  fut.onComplete((v) => {
 *      log("Ok, result is given")
 *  })
 *
 **/
export default class AsyncPromise<T> extends Promise<T> {

    constructor(f: () => T, executor: ExecutionContext) {
        super();
        this.future = new Future<T>();
        executor.registerForExecution(() => {
            let result = Try.doWork(() => f());
            this.complete(result);
        })
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