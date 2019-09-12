export interface BankAccountInterface {
    depositFunds(amount: number): void;
    withdrawFunds(amount: number): void;
    balance: number;
}

export class BankAccount implements BankAccountInterface {
    private _balance: number;
    constructor() {
        this._balance = 0;
    }
    public depositFunds(amount: number): void {
        if (amount <= 0) {
            throw "Invalid Value: you can only deposit positive amounts";
        }
        this._balance += amount;
    }
    public withdrawFunds(amount: number): void {
        if (amount <= 0) {
            throw "Invalid Value: you can only withdraw positive amounts";
        }
        if (this._balance < amount) {
            throw "Error Insufficient funds";
        }
        this._balance -= amount;
    }
    public get balance(): number {
        return this._balance;
    }
}