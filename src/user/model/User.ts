import { BankAccountInterface } from "../../bankAccount/model/BankAccount";

export interface UserInterface {
    id: string;
    bankAccount: BankAccountInterface;
    depositFundsIntoAccount(amount: number): void;
    withdrawFundsFromAccount(amount: number): void;
}

export class User implements UserInterface {
    private _id: string;
    private _bankAccount: BankAccountInterface;
    constructor(id: string, bankAccount: BankAccountInterface) {
        this._id = id;
        this._bankAccount = bankAccount;
    }
    public depositFundsIntoAccount(amount: number) {
        this._bankAccount.depositFunds(amount);
    }
    public withdrawFundsFromAccount(amount: number) {
        this._bankAccount.withdrawFunds(amount);
    }
    public get id(): string {
        return this._id;
    }
    public get bankAccount(): BankAccountInterface {
        return this._bankAccount;
    }
}