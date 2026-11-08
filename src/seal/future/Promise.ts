import Future from "./Future";
import Try, {Failure, Success} from "../../common/Try";

/**
 * This class package implements the concept of future / promise in its classic presentation.
 * According to it, the future is a synchronous container for the result, and a promise is some function
 * that fills the future. At the same time, the properties of this function are not initially defined,
 * therefore this base class is presented in the form of abstract interfaces. The concrete implementation
 * of the promise determines how the function will be executed - synchronous, asynchronously or otherwise.
 * For more detailed descriptions of what specific promise does as well as the logic of the future, see
 * the corresponding implementations.
 */
export default abstract class Promise<T> {
    future: Future<T>;
    isCompleted: boolean;

    complete(result: Try<T>): Promise<T> {
        if (this.tryComplete(result)) {
            return this;
        } else {
            throw new Error("Promise already completed.")
        }
    }

    abstract tryComplete(result: Try<T>): boolean

    success(value: T): Promise<T> {
        return this.complete(new Success(value));
    }

    trySuccess(value: T): boolean {
        return this.tryComplete(new Success(value));
    }

    failure(cause: Error): Promise<T> {
        return this.complete(new Failure(cause));
    }

    tryFailure(cause: Error): boolean {
        return this.tryComplete(new Failure(cause));
    }
}