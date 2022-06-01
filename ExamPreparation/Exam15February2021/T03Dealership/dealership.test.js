const { assert, expect } = require('chai');
const dealership = require('./dealership');

describe('Dealership Tests', () => {
    describe('Tests should check neCarCost function', () => {
        it('should return the final price for a old car', () => {
            expect(dealership.newCarCost('Audi A4 B8', 15_500)).to.equal(500);
            expect(dealership.newCarCost('Audi A6 4K', 20_500)).to.equal(500);
            expect(dealership.newCarCost('Audi A8 D5', 25_500)).to.equal(500);
            expect(dealership.newCarCost('Audi TT 8J', 14_500)).to.equal(500);
        });

        it('should return the new car price for a new car', () => {
            expect(dealership.newCarCost('new', 3_500_00)).to.equal(3_500_00);
        });
    });
});