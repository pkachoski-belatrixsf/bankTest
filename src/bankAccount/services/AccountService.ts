import { BankAccountInterface } from "../model/BankAccount";

export interface AccountServiceInterface {
    doAccountTransfer(originAccount: BankAccountInterface, destinationAccount: BankAccountInterface, amount: number): void;
}

export class AccountService {
    public doAccountTransfer(originAccount: BankAccountInterface, destinationAccount: BankAccountInterface, amount: number): void {
        originAccount.withdrawFunds(amount);
        destinationAccount.depositFunds(amount);
    }
}