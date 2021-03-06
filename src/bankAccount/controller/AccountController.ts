import { UserServiceInterface } from "../../user/service/UserService";
import { AccountServiceInterface } from "../../bankAccount/services/AccountService";
import { CurrencyInterface } from "../../common/model/Currency";

export class AccountController {
    private _userService: UserServiceInterface;
    private _accountService: AccountServiceInterface;
    constructor(userService: UserServiceInterface, accountService: AccountServiceInterface) {
        this._accountService = accountService;
        this._userService = userService;
    }
    public doFundsTransferBetweenUsers(originUserId: string, destinationUserId: string, amount: CurrencyInterface) {
        const originUser = this._userService.findUserById(originUserId);
        const destinationUser = this._userService.findUserById(destinationUserId);
        this._accountService.doAccountTransfer(originUser.bankAccount, destinationUser.bankAccount, amount);
    }
} 