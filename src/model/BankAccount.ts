import { AccountTypeDefinitionInterface } from "../model/AccountTypeDefinition";

export interface BankAccountInterface {
    depositFunds(amount: number): void;
    withdrawFunds(amount: number): void;
    getBalance(): number;
    getWithdrawLimit(): number;
    setWithdrawLimit(amount: number): void;
}

export class BankAccount implements BankAccountInterface {
    private _balance: number;
    private _withdrawLimit: number;
    private _bankAccountType: AccountTypeDefinitionInterface;
    constructor(bankAccountType: AccountTypeDefinitionInterface){
        this._balance = 0;
        this._withdrawLimit = bankAccountType.withdrawLimit;
        this._bankAccountType = bankAccountType;
    }
    public depositFunds(amount: number) : void {
        if (amount <= 0) {
            throw "Invalid Value: you can only deposit positive amounts";
        }
        this._balance += amount;
    }
    public withdrawFunds(amount: number) : void {
        if (this._balance < amount) {
            throw "Error Insufficient funds";
        }
        this._balance -= amount;
    }
    public getBalance(): number {
        return this._balance;
    }
    public getWithdrawLimit(): number {
        return this._withdrawLimit;
    }
    public setWithdrawLimit(amount: number) {
        this._withdrawLimit = amount;
    }
    public get bankAccountType(): AccountTypeDefinitionInterface {
        return this._bankAccountType;
    }
    public set bankAccountType(amount: AccountTypeDefinitionInterface) {
        this._bankAccountType = amount;
    }
}