import { UserController } from "../../../src/user/controller/UserController";
import { Currency } from "../../../src/common/model/Currency";
import { getUserMockConfig, getUserServiceMockConfig } from "../../utils/TestUtils";

let userMocked;
let defUser;
let userServiceInstance;
let userController: UserController;
beforeEach(() => {
    ({ mock: userMocked, user: defUser } = getUserMockConfig({ id: "Federico" }));
    const { mock: UserServiceMock } = getUserServiceMockConfig({ expectedUserMock: userMocked });
    userServiceInstance = new UserServiceMock();
    userController = new UserController(userServiceInstance);
});

describe("User Controller Tests", () => {
    test('Expects user controller to do user funds deposit', () => {
        const userId = "Federico";
        const amount = new Currency(1000);
        userController.doUserDeposit(userId, amount);
        expect(userServiceInstance.findUserById).toHaveBeenCalledWith(userId);
        expect(defUser.depositFundsIntoAccount).toHaveBeenCalledWith(amount);
    });

    test('Expects user controller to do user funds withdraw', () => {
        const userId = "Federico";
        const amount = new Currency(1000);
        userController.doUserWithdraw(userId, amount);
        expect(userServiceInstance.findUserById).toHaveBeenCalledWith(userId);
        expect(defUser.withdrawFundsFromAccount).toHaveBeenCalledWith(amount);
    });
});