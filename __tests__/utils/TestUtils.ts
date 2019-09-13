import { BankAccountInterface } from "../../src/bankAccount/model/BankAccount";
import { UserInterface } from "../../src/user/model/User";
import { UserServiceInterface } from "../../src/user/service/UserService";
import { AccountServiceInterface } from "../../src/bankAccount/services/AccountService";

export const getBankAccountMockConfig = ({ depositFunds = jest.fn(), withdrawFunds = jest.fn(), balance = 1000 }) => {
    const bankAccount = { depositFunds, withdrawFunds, balance };
    return { mock: jest.fn<BankAccountInterface, []>(() => bankAccount), bankAccount};
};

export const getUserMockConfig = ({
    id = "MockUser1", bankAccountMock=null, depositFundsIntoAccount = jest.fn(), withdrawFundsFromAccount = jest.fn()
}) => {
    let { mock: BankAccountMock } = getBankAccountMockConfig({});
    if(bankAccountMock != null) {
        BankAccountMock = bankAccountMock;
    }
    const user = {
        id,
        bankAccount: new BankAccountMock(),
        depositFundsIntoAccount,
        withdrawFundsFromAccount
    };
    return { mock: jest.fn<UserInterface, []>(() => user), user } ;
};

export const getUserServiceMockConfig = ({ findUserById = jest.fn(), expectedUserMock=null}) => {
    let userService = { findUserById };
    if(expectedUserMock != null) {
        userService = { ...userService, findUserById: expectedUserMock };
    }
    return { mock: jest.fn<UserServiceInterface, []>(() => userService), userService };
};

export const getAccountServiceMockConfig = ({ doAccountTransfer = jest.fn() }) => {
    const accountService = { doAccountTransfer };
    return { mock:jest.fn<AccountServiceInterface, []>(() => accountService), accountService };
};
