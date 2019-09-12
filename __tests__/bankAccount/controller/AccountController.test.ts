import { AccountController } from "../../../src/bankAccount/controller/AccountController";
import { AccountServiceInterface } from "../../../src/bankAccount/services/AccountService";
import { UserServiceInterface } from "../../../src/user/service/UserService";
import { UserInterface } from "../../../src/user/model/User";
import { BankAccountInterface } from "../../../src/bankAccount/model/BankAccount";

let user;
let userInstance;
let accountInstance;
let bank;
beforeEach(() => {
    const BankAccountMock = jest.fn<BankAccountInterface, []>();
    user = {
        id: "",
        bankAccount: new BankAccountMock(),
        depositFundsIntoAccount: jest.fn(),
        withdrawFundsFromAccount: jest.fn(),
    };
    const UserMock = jest.fn<UserInterface, []>(() => user);
    const UserServiceMock = jest.fn<UserServiceInterface, []>(() => ({
        findUserById: UserMock
    }));
    const AccountServiceMock = jest.fn<AccountServiceInterface, []>(() => ({
        doAccountTransfer: jest.fn()
    }));
    userInstance = new UserServiceMock();
    accountInstance = new AccountServiceMock();
    bank = new AccountController(userInstance, accountInstance);
});

describe("Account Controller tests", () => {
    test('Expects Account Controller to do fund transfer between users', () => {
        const fromUserId = "Federico";
        const toUserId = "Pepe";
        const amount = 1000;
        bank.doFundsTransferBetweenUsers(fromUserId, toUserId, amount);
        expect(userInstance.findUserById).toHaveBeenCalledWith(fromUserId);
        expect(userInstance.findUserById).toHaveBeenCalledWith(toUserId);
        expect(accountInstance.doAccountTransfer).toHaveBeenCalledWith(user.bankAccount, user.bankAccount, amount);
    });
});