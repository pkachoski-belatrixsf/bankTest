import { UserController } from "../../../src/user/controller/UserController";
import { UserServiceInterface } from "../../../src/user/service/UserService";
import { UserInterface } from "../../../src/user/model/User";
import { BankAccountInterface } from "../../../src/bankAccount/model/BankAccount";

let userInstance;
let user;
let bank;
beforeEach(() => {
    const BankAccountMock = jest.fn<BankAccountInterface, []>();
    user = {
        id: "",
        bankAccount: new BankAccountMock(),
        depositFundsIntoAccount: jest.fn(),
        withdrawFundsFromAccount: jest.fn(),
    };
    const UserMock = jest.fn<UserInterface, []>(() => (user));
    const UserServiceMock = jest.fn<UserServiceInterface, []>(() => ({
        findUserById: UserMock
    }));
    userInstance = new UserServiceMock();
    bank = new UserController(userInstance);
});

describe("User Controller Tests", () => {
    test('Expects user controller to do user funds deposit', () => {     
        const userId = "Federico";
        const amount = 1000;
        bank.doUserDeposit(userId, amount);
        expect(userInstance.findUserById).toHaveBeenCalledWith(userId);
        expect(user.depositFundsIntoAccount).toHaveBeenCalledWith(amount);
    });

    test('Expects user controller to do user funds withdraw', () => {     
        const userId = "Federico";
        const amount = 1000;
        bank.doUserWithdraw(userId, amount);
        expect(userInstance.findUserById).toHaveBeenCalledWith(userId);
        expect(user.withdrawFundsFromAccount).toHaveBeenCalledWith(amount);
    });
});