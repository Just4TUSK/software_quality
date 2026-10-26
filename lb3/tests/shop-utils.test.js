import {
    describe,
    expect,
    test,
} from 'vitest';

import {
    calculateDiscount,
    validateQuantity,
    getShippingCost,
} from '../src/shop-utils.js';

describe('calculateDiscount', () => {
    test(
        'returns 90 for price 100 and discount 10%',
        () => {
            // Arrange
            const price = 100;
            const percent = 10;

            // Act
            const result = calculateDiscount(
                price,
                percent
            );

            // Assert
            expect(result).toBe(90);
        }
    );
    test(
        'returns 100 for price 100 and discount 0%',
        () => {
            // Arrange
            const price = 100;
            const percent = 0;

            // Act
            const result = calculateDiscount(
                price,
                percent
            );

            // Assert
            expect(result).toBe(100);
        }
    );
    test(
        'returns 0 for price 100 and discount 100%',
        () => {
            // Arrange
            const price = 100;
            const percent = 100;

            // Act
            const result = calculateDiscount(
                price,
                percent
            );

            // Assert
            expect(result).toBe(0);
        }
    );
    test(
        'returns ERROE for price -10 and discount 10%',
        () => {
            // Arrange
            const price = -10;
            const percent = 10;

            // Act, Assert
            expect(
                () => calculateDiscount(price, percent)
            ).toThrow('Price must be a non-negative number')
        }
    );
    test(
        'returns ERROE when price is finite and discount 10%',
        () => {
            // Arrange
            const price = Infinity;
            const percent = 10;

            // Act, Assert
            expect(
                () => calculateDiscount(price, percent)
            ) .toThrow('Price must be a non-negative number')
        }
    );
    test(
        'returns ERROE for price 100 and discount -10%',
        () => {
            // Arrange
            const price = 100;
            const percent = -10;

            // Act, Assert
            expect(
                () => calculateDiscount(price, percent)
            ).toThrow('Discount must be between 0 and 100')
        }
    );
    test(
        'returns ERROE for price 100 and discount Infinity',
        () => {
            // Arrange
            const price = 100;
            const percent = Infinity;

            // Act, Assert
            expect(
                () => calculateDiscount(price, percent)
            ).toThrow('Discount must be between 0 and 100')
        }
    );
    test(
        'returns ERROE for price 100 and discount 110%',
        () => {
            // Arrange
            const price = 100;
            const percent = 110;

            // Act, Assert
            expect(
                () => calculateDiscount(price, percent)
            ).toThrow('Discount must be between 0 and 100')
        }
    );

});

describe('validateQuantity', () => {
    test.for([
        {quantity: 0, expected: false},
        {quantity: 1, expected: true},
        {quantity: 2, expected: true},
        {quantity: 9, expected: true},
        {quantity: 10, expected: true},
        {quantity: 11, expected: false},
        {quantity: 1.5, expected: false},
    ])(
        'validateQuantity($quantity) returns $expected',
        ({quantity, expected}) => {
            expect(
                validateQuantity(quantity)
            ).toBe(expected);
        }
    );
});
describe('getShippingCost', () => {
    test('returns 100 shipping cost when total is 999',
        () => {
            const total = 999;

            const result = getShippingCost(total);

            expect(result).toBe(100);
        }
    );
    test('returns 0 shipping cost when total is 1000',
        () => {
            const total = 1000;

            const result = getShippingCost(total);

            expect(result).toBe(0);
        }
    );
    test('returns ERROR shipping cost when total is -1',
        () => {
            const total = -1;

            expect(() => getShippingCost(total))
                .toThrow('Total must be a non-negative number')
        }
    );
});
