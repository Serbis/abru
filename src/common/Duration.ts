
/** Representation of some time period. This class allows free conversion of one time unit
 *  to another. */
export class Duration {
    nano: number;
    unit: TimeUnit = TimeUnit.Nanosecond;

    private constructor(nano: number, unit: TimeUnit) {
        this.nano = nano;
        this.unit = unit;
    }

    static fromNanoseonds(count: number): Duration {
        return new Duration(count * 1000, TimeUnit.Nanosecond);
    }

    static fromMicroseonds(count: number): Duration {
        return new Duration(count * 1000, TimeUnit.Microsecond);
    }

    static fromMillisecondss(count: number): Duration {
        return new Duration(count * 1000000, TimeUnit.Millisecond);
    }

    static fromSeconds(count: number): Duration {
        return new Duration(count * 1000000000, TimeUnit.Second);
    }

    static fromMinutes(count: number): Duration {
        return new Duration(count * 1000000000000, TimeUnit.Minute);
    }

    static fromHours(count: number): Duration {
        return new Duration(count * 1000000000000000, TimeUnit.Hour);
    }

    toNanoseconds(): number {
        return this.nano;
    }

    toMicroseonds(): number {
        return this.nano / 1000;
    }

    toMilliseconds(): number {
        return this.nano / 1000000;
    }

    toSeconds(): number {
        return this.nano / 1000000000;
    }

    toMinutes(): number {
        return this.nano / 1000000000000;
    }

    toHours(): number {
        return this.nano / 1000000000000000;
    }

    toString() {
        if (this.unit == TimeUnit.Nanosecond) return this.nano + " nanosecond";
        else if (this.unit == TimeUnit.Microsecond) return this.nano / 1000 + " mikrosecond";
        else if (this.unit == TimeUnit.Millisecond) return this.nano / 1000000 + " millisecond";
        else if (this.unit == TimeUnit.Second) return this.nano / 1000000000 + " second";
        else if (this.unit == TimeUnit.Minute) return this.nano / 1000000000000 + " minute";
        else if (this.unit == TimeUnit.Hour) return this.nano / 1000000000000000 + " hour";
        else return this.nano / 1000 + "unknown";
    }
}

export enum TimeUnit {
    Nanosecond,
    Microsecond,
    Millisecond,
    Second,
    Minute,
    Hour
}