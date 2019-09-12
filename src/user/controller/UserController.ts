import { UserServiceInterface } from "../service/UserService";

export class UserController {
    private _userService: UserServiceInterface;
    constructor(userService: UserServiceInterface) {
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
} 