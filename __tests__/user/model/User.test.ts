import { User } from "../../../src/user/model/User";
import { getBankAccountMockConfig } from "../../utils/TestUtils";
import { Currency } from "../../../src/common/model/Currency";

let AccountMocked;
let defAccount;
beforeEach(() => {
    ({ mock: AccountMocked, bankAccount: defAccount } = getBankAccountMockConfig({}));
});

describe("User model tests", () => {
    test('Expects User to get correctly initialized', () => {
        let userId = "UserName";
        let account = new AccountMocked();
        let user = new User(userId, account);
        expect(user.id).toBe(userId);
        expect(user.bankAccount).toBe(account);
    });

    test('Expects User deposit funds to call account deposit funds', () => {
        let user = new User("UserName", new AccountMocked());
        let amount = new Currency(1000);
        user.depositFundsIntoAccount(amount);
        expect(defAccount.depositFunds).toBeCalledWith(amount);
        expect(defAccount.depositFunds).toBeCalledTimes(1);
    });

    test('Expects User withdraw funds to call account withdraw funds', () => {
        let user = new User("UserName", new AccountMocked());
        let amount = new Currency(1000);
        user.withdrawFundsFromAccount(amount);
        expect(defAccount.withdrawFunds).toBeCalledWith(amount);
        expect(defAccount.withdrawFunds).toBeCalledTimes(1);
    });
});