export interface CurrencyInterface {
    value: number;
}

export class Currency {
    private _value: number;
    constructor(value: number) {
        if (value === null || value < 0) {
            throw Error("Error: Currency can only contain a positive value");
        }
        this._value = value;
    }
    public get value(): number {
        return this._value;
    }
}