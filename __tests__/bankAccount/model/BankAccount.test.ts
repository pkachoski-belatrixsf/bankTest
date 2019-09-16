import { Currency } from "../../../src/common/model/Currency";
import { BankAccount } from "../../../src/bankAccount/model/BankAccount";

describe("Bank account model tests", () => {
    test('Expects Bank Account to get correctly initialized balance', () => {
        let bankAccount = new BankAccount();
        expect(bankAccount.balance).toBe(0);
    });

    test('Expects Bank Account deposit funds to add currency into the account', () => {
        let bankAccount = new BankAccount();
        let depositValA = 500;
        let depositValB = 2000;
        let depositValC = 10000;
        bankAccount.depositFunds(new Currency(depositValA));
        expect(bankAccount.balance).toBe(depositValA);
        bankAccount.depositFunds(new Currency(depositValB));
        expect(bankAccount.balance).toBe(depositValA + depositValB);
        bankAccount.depositFunds(new Currency(depositValC));
        expect(bankAccount.balance).toBe(depositValA + depositValB + depositValC);
    });

    test('Expects Bank Account to thow error on withdraw funds when account balance is less than withdraw value', () => {
        let bankAccount = new BankAccount();
        let withdrawValue = new Currency(5000);
        expect(() => bankAccount.withdrawFunds(new Currency(0))).toThrowError();
        expect(() => bankAccount.withdrawFunds(withdrawValue)).toThrowError();
        bankAccount.depositFunds(new Currency(1000));
        expect(() => bankAccount.withdrawFunds(withdrawValue)).toThrowError();
    });

    test('Expects Bank Account to withdraw funds correctly', () => {
        let bankAccount = new BankAccount();
        let initialBalance = 10000;
        let withdrawValue = 5000;
        bankAccount.depositFunds(new Currency(initialBalance));
        expect(bankAccount.withdrawFunds(new Currency(withdrawValue)));
        expect(bankAccount.balance).toBe(initialBalance - withdrawValue);
        expect(bankAccount.withdrawFunds(new Currency(withdrawValue)));
        expect(bankAccount.balance).toBe(0);
    });
});