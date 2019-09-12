import { BankAccountType } from "../vo/BankAccountType";

export interface AccountTypeDefinitionInterface {
    accountType: BankAccountType;
    withdrawLimit: number;
}

export class AccountTypeDefinition implements AccountTypeDefinitionInterface {
    private _accountType: BankAccountType;
    private _withdrawLimit: number;
    constructor(accountType: BankAccountType, withdrawLimit: number) {
        this._accountType = accountType;
        this._withdrawLimit = withdrawLimit;
    }
    public get accountType(){
        return this._accountType;
    }
    public get withdrawLimit() {
        return this._withdrawLimit;
    }
    public set accountType(name: BankAccountType) {
        this._accountType = name;
    }
    public set withdrawLimit(withdrawLimit: number) {
        this._withdrawLimit = withdrawLimit;
    }
}