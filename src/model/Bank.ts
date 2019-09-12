import { UserServiceInterface } from "../services/UserService";
import { AccountServiceInterface } from "../services/AccountService";

export class Bank {
    private _userService: UserServiceInterface;
    private _accountService: AccountServiceInterface;
    constructor(userService: UserServiceInterface, accountService: AccountServiceInterface) {
        this._accountService = accountService;
        this._userService = userService;
    }
    public doUserDeposit(userId: string, amount: number) {
        const user = this._userService.findUserById(userId);
        user.depositFundsIntoAccount(amount);
    }
    public doUserWithdraw(userId: string, amount: number) {
        const user = this._userService.findUserById(userId);
        user.withdrawFundsFromAccount(amount);
    }
    public doUserFundsTransfer(originUserId: string, destinationUserId: string, amount: number) {
        const originUser = this._userService.findUserById(originUserId);
        const destinationUser = this._userService.findUserById(destinationUserId);
        this._accountService.doAccountTransfer(originUser.bankAccount, destinationUser.bankAccount, amount);
    }
} 