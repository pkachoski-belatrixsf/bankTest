import { getUserMockConfig } from "../../utils/TestUtils";
import { UserService } from "../../../src/user/service/UserService";

let DefUserMocked;
let defUserData;
beforeEach(() => {
    ({ mock: DefUserMocked, user: defUserData } = getUserMockConfig({ id: "Federico" }));
});
describe("User Service tests", () => {
    test('Expects User Service to find existing user', () => {
        const userInstance = new DefUserMocked();
        const userService = new UserService([userInstance]);
        expect(userService.findUserById(defUserData.id)).toMatchObject(userInstance);
    });

    test('Expects User Service to throw error on calling findUserById when no users exist', () => {
        let userService = new UserService(null);
        expect(() => userService.findUserById(defUserData.id)).toThrowError();
        userService = new UserService([null]);
        expect(() => userService.findUserById(defUserData.id)).toThrowError();
    });

    test('Expects User Service to throw error on calling findUserById when given user does not exists', () => {
        const { mock: User1 } = getUserMockConfig({ id: "ELON" });
        const { mock: User2 } = getUserMockConfig({ id: "MARK" });
        const userService = new UserService([new User1(), new User2()]);
        expect(() => userService.findUserById("NOT EXISTS")).toThrowError();
    });
});