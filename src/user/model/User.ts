import { BankAccountInterface } from "../../bankAccount/model/BankAccount";
import { CurrencyInterface } from "../../common/model/Currency";

export interface UserInterface {
    id: string;
    bankAccount: BankAccountInterface;
    depositFundsIntoAccount(amount: CurrencyInterface): void;
    withdrawFundsFromAccount(amount: CurrencyInterface): void;
}

export class User implements UserInterface {
    private _id: string;
    private _bankAccount: BankAccountInterface;
    constructor(id: string, bankAccount: BankAccountInterface) {
        this._id = id;
        this._bankAccount = bankAccount;
    }
    public depositFundsIntoAccount(amount: CurrencyInterface) {
        this._bankAccount.depositFunds(amount);
    }
    public withdrawFundsFromAccount(amount: CurrencyInterface) {
        this._bankAccount.withdrawFunds(amount);
    }
    public get id(): string {
        return this._id;
    }
    public get bankAccount(): BankAccountInterface {
        return this._bankAccount;
    }
}