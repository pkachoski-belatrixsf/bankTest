import { UserInterface } from "../model/User";

export interface UserServiceInterface {
    findUserById(userId: string): UserInterface;
}

export class UserService {
    private _users: Array<UserInterface>;
    constructor(users: Array<UserInterface>) {
        this._users = users || [];
    }
    public findUserById(userId: string): UserInterface {
        const userFound = this._users.find(item => item.id === userId);
        if (!userFound) {
            throw Error(`Error: User ${userId} doesn't exist`);
        }
        return userFound;
    }
}