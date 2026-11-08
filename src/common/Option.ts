export abstract class Option<T> {
    value: T = null;

    static from<T>(v: T): Option<T> {
        if (v == null) {
            return new None();
        } else {
            return new Some(v);
        }
    }

    isEmpty(): boolean {
        return this.value == null;
    }

    isDefined(): boolean {
        return this.value != null;
    }

    get(): T {
        return this.value;
    }

    getOrElse(other: T): Option<T> {
        if (this.value == null) {
            return new Some(other)
        } else {
            return this;
        }
    }
}

export class Some<T> extends Option<T> {
    constructor(value: T) {
        super();
        this.value = value;
    }
}

export class None extends Option<any> {}