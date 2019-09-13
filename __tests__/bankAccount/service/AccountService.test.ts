import { AccountService } from "../../../src/bankAccount/services/AccountService";
import { Currency } from "../../../src/common/model/Currency";
import { getBankAccountMockConfig } from "../../utils/TestUtils";

let fromBankAccountInstance;
let toBankAccountInstance;
let accountService: AccountService;
beforeEach(() => {
    const { mock: FromBankAccountMock } = getBankAccountMockConfig({});
    const { mock: ToBankAccountMock } = getBankAccountMockConfig({});
    fromBankAccountInstance = new FromBankAccountMock();
    toBankAccountInstance = new ToBankAccountMock();
    accountService = new AccountService();
});

describe("Account Service tests", () => {
    test('Expects Account Service to do fund transfer between user accounts', () => {
        const amount = new Currency(1000);
        accountService.doAccountTransfer(fromBankAccountInstance, toBankAccountInstance, amount);
        expect(fromBankAccountInstance.withdrawFunds).toHaveBeenCalledWith(amount);
        expect(toBankAccountInstance.depositFunds).toHaveBeenCalledWith(amount);
    });
});