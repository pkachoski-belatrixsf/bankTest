import { BankAccountType } from "../vo/BankAccountType";
import { AccountTypeDefinitionInterface, AccountTypeDefinition } from "../model/AccountTypeDefinition";
import { BankAccountInterface } from "../model/BankAccount";

export interface AccountServiceInterface {
    doAccountTransfer(originAccount: BankAccountInterface, destinationAccount: BankAccountInterface, amount: number): void;
    getAccountTypesDefinitions(): Array<AccountTypeDefinitionInterface>;
}

export class AccountService {
    public doAccountTransfer(originAccount: BankAccountInterface, destinationAccount: BankAccountInterface, amount: number): void {
        originAccount.withdrawFunds(amount);
        destinationAccount.depositFunds(amount);
    }
    public getAccountTypesDefinitions(): Array<AccountTypeDefinitionInterface> {
        return [new AccountTypeDefinition(BankAccountType.SAVINGS, 1000)];
    }
}