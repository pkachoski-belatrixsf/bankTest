import { AccountController } from "../../../src/bankAccount/controller/AccountController";
import { Currency } from "../../../src/common/model/Currency";
import { getUserServiceMockConfig, getAccountServiceMockConfig, getUserMockConfig } from "../../utils/TestUtils";

let userMocked;
let defUser;
let userServiceInstance;
let accountServiceInstance;
let accountController: AccountController;
beforeEach(() => {
    ({ mock: userMocked, user: defUser } = getUserMockConfig({ id: "Federico" }));
    const { mock: UserServiceMock } = getUserServiceMockConfig({ expectedUserMock: userMocked });
    const { mock: AccountServiceMock } = getAccountServiceMockConfig({})
    userServiceInstance = new UserServiceMock();
    accountServiceInstance = new AccountServiceMock();
    accountController = new AccountController(userServiceInstance, accountServiceInstance);
});

describe("Account Controller tests", () => {
    test('Expects Account Controller to doFundsTransferBetweenUsers correctly', () => {
        const fromUserId = userMocked.id;
        const toUserId = "Pepe";
        const amount = new Currency(1000);
        accountController.doFundsTransferBetweenUsers(fromUserId, toUserId, amount);
        expect(userServiceInstance.findUserById).toHaveBeenCalledWith(fromUserId);
        expect(userServiceInstance.findUserById).toHaveBeenCalledWith(toUserId);
        expect(userServiceInstance.findUserById).toHaveBeenCalledTimes(2);
        expect(accountServiceInstance.doAccountTransfer).toHaveBeenCalledWith(defUser.bankAccount, defUser.bankAccount, amount);
    });

    test('Expects Account Controller to fail when doFundsTransferBetweenUsers uses different users that the ones passed by params', () => {
        const fromUserId = userMocked.id;
        const toUserId = "Pepe";
        const amount = new Currency(1000);
        accountController.doFundsTransferBetweenUsers(fromUserId, toUserId, amount);
        expect(userServiceInstance.findUserById).not.toHaveBeenCalledWith("invalidUser");
    });
});