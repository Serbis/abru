
export default abstract class Try<T> {

    static doWork<T>(f: () => T): Try<any> {
        try {
            let r = f();
            return new Success(r)
        } catch (e) {
            return new Failure(e)
        }
    }

    abstract isFailure(): boolean
    abstract isSuccess(): boolean
    abstract get(): T
    abstract failed(): Try<Error>
}

export class Success<T> extends Try<T> {
    value: T;

    constructor(value: T) {
        super();
        this.value = value;
    }

    isFailure(): boolean {
        return false;
    }

    isSuccess(): boolean {
        return true;
    }

    get(): T {
        return this.value;
    }

    failed(): Try<Error> {
        throw new Error("Try to get failed on success instance")
    }
}

export class Failure<T> extends Try<T> {
    error: Error;

    constructor(error: Error) {
        super();
        this.error = error;
    }

    isFailure(): boolean {
        return true;
    }

    isSuccess(): boolean {
        return false;
    }

    get(): T {
        throw new Error("Try to get value from failed instance")
    }

    failed(): Try<Error> {
        return new Success(this.error);
    }
}