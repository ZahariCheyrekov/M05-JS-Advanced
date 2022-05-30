const { assert, expect } = require('chai');
const flowerShop = require('./flowerShop');

describe('FlowerShop tests', () => {
    describe('Tests should check calcPriceOfFlowers function', () => {
        it('should throw error for wrong type of flower value', () => {
            expect(() => flowerShop.calcPriceOfFlowers(10, 10, 10)).to.throw(Error);
        });

        it('should throw error for wrong type of price value', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 'invalid', 10)).to.throw(Error);
        });

        it('should throw error for wrong type of quantity value', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 10, 'invalid')).to.throw(Error);
        });

        it('should throw error for wrong type of flower and price values', () => {
            expect(() => flowerShop.calcPriceOfFlowers(10, 'invalid', 10)).to.throw(Error);
        });

        it('should throw error for wrong type of flower and quantity values', () => {
            expect(() => flowerShop.calcPriceOfFlowers(10, 10, 'invalid')).to.throw(Error);
        });

        it('should throw error for wrong type of price and quantity values', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 'invalid', 'invalid')).to.throw(Error);
        });

        it('should throw error for wrong input values type', () => {
            expect(() => flowerShop.calcPriceOfFlowers(10, 'invalid', 'invalid')).to.throw(Error);
        });

        it('should return message with calculated price for the given flower', () => {
            const expectedMessage = 'You need $50.00 to buy Rose!'
            const actualMessage = flowerShop.calcPriceOfFlowers('Rose', 5, 10);
            assert.equal(expectedMessage, actualMessage);
        });
    });

    describe('Tests should check flowers availableness', () => {
        it('should return that flowers are sold and they are not in the array', () => {
            const expectedMessage = 'The Rose are sold! You need to purchase more!';
            const actualMessage = flowerShop.checkFlowersAvailable('Rose', ['Sunflower', 'Sunflower']);
            assert.equal(expectedMessage, actualMessage);
        });

        it('should return that flowers are available and they are in the array', () => {
            const expectedMessage = 'The Rose are available!';
            const actualMessage = flowerShop.checkFlowersAvailable('Rose', ['Rose', 'Sunflower']);
            assert.equal(expectedMessage, actualMessage);
        });
    });

    describe('Test should check sellFlowers function', () => {
        it('should trow error for invalid gardenArr type different from array', () => {
            expect(() => flowerShop.sellFlowers('invalid', 10)).to.throw(Error);
        });

        it('should trow error for invalid space type different from number', () => {
            expect(() => flowerShop.sellFlowers([], 'invalid')).to.throw(Error);
        });

        it('should trow error for invalid gardenArr type and space', () => {
            expect(() => flowerShop.sellFlowers('invalid', 'invalid')).to.throw(Error);
        });

        it('should trow error for invalid space in of the garden', () => {
            expect(() => flowerShop.sellFlowers([], -10)).to.throw(Error);
        });

        it('should trow error for invalid space more than the gardenArr length', () => {
            expect(() => flowerShop.sellFlowers([], 10)).to.throw(Error);
        });

        it('should trow error for invalid space equal to the gardenArr length', () => {
            expect(() => flowerShop.sellFlowers(['Rose'], 1)).to.throw(Error);
        });
    })
});