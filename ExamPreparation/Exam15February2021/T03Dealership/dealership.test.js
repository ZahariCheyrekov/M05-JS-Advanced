const { expect } = require('chai');
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

    describe('Tests should check carEquipment function', () => {
        it('should return the selected cars in array', () => {
            expect(dealership.carEquipment(['new', 'old'], [0, 1])).to.deep.equal(['new', 'old']);
        });
    });

    describe('Tests should check euroCategory', () => {
        it('should return that the euro category is low and there is no discount for it', () => {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });

        it('should return that we have discount to the final price of euro catefory 4', () => {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });

        it('should return that we have discount to the final price of euro catefory 10', () => {
            expect(dealership.euroCategory(10)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });
    });
});