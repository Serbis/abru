import Try, {Success} from "../../common/Try";
import {None, Option, Some} from "../../common/Option";
import CompletablePromise from "./CompletablePromise";
import ExecutionContext from "../async/ExecutionContext";
import AsyncPromise from "./AsyncPromise";

/**
 * A container for the result of completing some promise. It should be read as - a container for
 * the result that will be sometime later. It is possible to attach various functional combinators
 * to this container, which will be executed immediately after receiving the result from the promise.
 */
export default class Future<T> {

    /** The value of futures. Prior to filling by promise is set to none. After filling, it accepts
     *  Тry type, which contains either the result of performing some calculation
     *  (calculated in a promise) or an error that occurred during this calculation. */
    private value0: Option<Try<T>> = new None();

    /** The function that will be executed immediately after filling the future value. This
     *  function is assigned by combinators and contains the logic of its work. */
    private next: (v: Try<T>) => void;

    /** Syntactic sugar for creating of AsyncPromise and extracting it's future */
    static async<T>(f: () => T, executor: ExecutionContext): Future<T> {
        let p = new AsyncPromise<T>(f, executor);
        return p.future;
    }

    /** Return current future value */
    value(): Option<Try<T>> {
        return this.value0;
    }

    /** Return current completion state */
    isCompleted(): boolean {
        return this.value0.isDefined();
    }

    /** Fills the value of the futures. This function is called from the promise of which the
     *  future belongs and it should never be called by the application code, otherwise it will
     *  lead to a breakdown of the future execution logic. */
    complete(result: Try<T>) {
        this.value0 = new Some(result);
        if (this.next) {
            this.next(result)
        }
    }

    /** Callback that will be called upon completion of the future. Pass the value of the future
     *  as function argument.
     *
     *  Example:
     *
     *  f.onComplete((v) => {
     *      if (v.isSuccess()) {
     *          console.log(`onComplete:success = ${v.get()}`)
     *      } else {
     *          console.log(`onComplete:failed = ${v.failed().get()}`)
     *      }
     *  })
     *
     **/
    onComplete(f: (_: Try<T>) => void) {
        this.next = (v) => f(v);
        if (this.value0.isDefined()) {
            this.next(this.value0.get())
        }
    }

    /** Callback that will be called upon completion of the future. Create and return new future,
     *  witch value is the result of function f applied to the this future value
     *
     *  Example:
     *
     *  f.map(v => {
     *       return v + 100;
     *  })
     *
     **/
    map<S>(f: (T) => S): Future<S> {
        let p = new CompletablePromise<S>();
        this.next = (v) => {
            if (v.isSuccess()) {
                let result = Try.doWork(() => f(v.get()));
                p.complete(result);
            } else {
                p.complete(v as Try<any> as Try<S>);
            }

        };

        return p.future;
    }

    /** Callback that will be called upon completion of the future. Create and return new future,
     *  witch value is the result of completion of the future returned by the function f
     *
     *  Example:
     *
     *  f.flatMap(v => {
     *       return Future.async(() => v + 1000);
     *  })
     *  .map(v => { // This map is over result of the inner future
     *       return v + 100;
     *  })
     *
     **/
    flatMap<S>(f: (T) => Future<S>): Future<S> {
        let p = new CompletablePromise<S>();
        let fut = p.future;
        this.next = (v) => {
            if (v.isSuccess()) {
                let result: Try<Future<S>> = Try.doWork(() => f(v.get()));
                if (result.isSuccess()) {
                    let nextFut = result.get();
                    nextFut.onComplete((v) => {
                        p.complete(v)
                    })
                } else {
                    p.complete(result as Try<any> as Try<S>)
                }
            } else {
                p.complete(v as Try<any> as Try<S>);
            }
        };

        return fut;
    }
}