import { Currency } from "../../../src/common/model/Currency";

describe("Currency model tests", () => {
    test.each([[1,1], [5,5], [10,10]])('Expects Currency with %s to get %s', (currencyValue, expectedValue) => {
        let currency = new Currency(currencyValue);
        expect(currency.value).toBe(expectedValue);
    });

    test.each([null, 0, -1, -5, -10])('Expects Currency instantiation with %s to throw error on invalid value', (currencyValue) => {
        expect(() =>  new Currency(currencyValue)).toThrowError();
    });
});