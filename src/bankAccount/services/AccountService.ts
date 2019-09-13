import { BankAccountInterface } from "../model/BankAccount";
import { CurrencyInterface } from "../../common/model/Currency";

export interface AccountServiceInterface {
    doAccountTransfer(originAccount: BankAccountInterface, destinationAccount: BankAccountInterface, amount: CurrencyInterface): void;
}

export class AccountService {
    public doAccountTransfer(originAccount: BankAccountInterface, destinationAccount: BankAccountInterface, amount: CurrencyInterface): void {
        originAccount.withdrawFunds(amount);
        destinationAccount.depositFunds(amount);
    }
}