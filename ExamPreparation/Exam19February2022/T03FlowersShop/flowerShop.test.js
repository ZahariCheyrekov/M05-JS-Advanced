const { assert, expect } = require('chai');
const flowerShop = require('./flowerShop');


describe('FlowerShop tests', () => {
    describe('Tests should check calcPriceOfFlowers function', () => {
        it('should throw error for wrong type of flower value', () => {
            expect(() => flowerShop.calcPriceOfFlowers(10, 10, 10)).to.throw(Error);
        });

        it('should throw error for wrong type of price value', () => {
            expect(() => flowerShop.calcPriceOfFlowers('rose', 'invalid', 10)).to.throw(Error);
        });

        it('should throw error for wrong type of quantity value', () => {
            expect(() => flowerShop.calcPriceOfFlowers('rose', 10, 'invalid')).to.throw(Error);
        });

        it('should throw error for wrong type of flower and price values', () => {
            expect(() => flowerShop.calcPriceOfFlowers(10, 'invalid', 10)).to.throw(Error);
        });

        it('should throw error for wrong type of flower and quantity values', () => {
            expect(() => flowerShop.calcPriceOfFlowers(10, 10, 'invalid')).to.throw(Error);
        });

        it('should throw error for wrong type of price and quantity values', () => {
            expect(() => flowerShop.calcPriceOfFlowers('rose', 'invalid', 'invalid')).to.throw(Error);
        });

        it('should throw error for wrong input values type', () => {
            expect(() => flowerShop.calcPriceOfFlowers(10, 'invalid', 'invalid')).to.throw(Error);
        });
    });
});