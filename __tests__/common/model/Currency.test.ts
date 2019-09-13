import { Currency } from "../../../src/common/model/Currency";

describe("Currency model tests", () => {
    test('Expects Currency to get correct value', () => {
        let currency = new Currency(1);
        expect(currency.value).toBe(1);
        currency = new Currency(5)
        expect(currency.value).toBe(5);
        currency = new Currency(10)
        expect(currency.value).toBe(10);
    });

    test('Expects Currency instantiation to throw error on null', () => {
        expect(() =>  new Currency(null)).toThrowError();
    });

    test('Expects Currency instantiation to throw error on negative value', () => {
        expect(() =>  new Currency(-1)).toThrowError();
        expect(() =>  new Currency(-5)).toThrowError();
        expect(() =>  new Currency(-10)).toThrowError();
    });
});