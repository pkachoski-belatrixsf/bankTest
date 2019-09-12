import { Bank } from "../src/model/Bank";
import { AccountServiceInterface } from "../src/services/AccountService";
import { UserServiceInterface } from "../src/services/UserService";
import { UserInterface } from "../src/model/User";
import { BankAccountInterface } from "../src/model/BankAccount";

describe("Simple expression tests", () => {
    test('Expects user doUserDeposit', () => {     
        const BankAccountMock = jest.fn<BankAccountInterface, []>();
        const UserMock = jest.fn<UserInterface, []>(() => ({
            id: "",
            bankAccount: new BankAccountMock(),
            depositFundsIntoAccount: jest.fn(),
            withdrawFundsFromAccount: jest.fn(),
        }));
        const UserServiceMock = jest.fn<UserServiceInterface, []>(() => ({
            findUserById: UserMock
        }));
        const AccountServiceMock = jest.fn<AccountServiceInterface, []>();

        const userId = "Federico";
        const amount = 1000;
        const userInstance = new UserServiceMock();
        const accountInstance = new AccountServiceMock();
        const bank = new Bank(userInstance, accountInstance);
        bank.doUserDeposit(userId, amount);
        expect(userInstance.findUserById).toHaveBeenCalledWith(userId);
    });
});