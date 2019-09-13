import { CurrencyInterface } from "../../common/model/Currency";

export interface BankAccountInterface {
    depositFunds(amount: CurrencyInterface): void;
    withdrawFunds(amount: CurrencyInterface): void;
    balance: number;
}

export class BankAccount implements BankAccountInterface {
    private _balance: number;
    constructor() {
        this._balance = 0;
    }
    public depositFunds(amount: CurrencyInterface): void {
        this._balance += amount.value;
    }
    public withdrawFunds(amount: CurrencyInterface): void {
        if (this._balance < amount.value) {
            throw Error("Error Insufficient funds");
        }
        this._balance -= amount.value;
    }
    public get balance(): number {
        return this._balance;
    }
}