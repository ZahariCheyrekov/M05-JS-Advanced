const { assert, expect } = require('chai');
const dealership = require('./dealership');

describe('Dealership Tests', () => {
    // newCarCost: function (oldCarModel, newCarPrice) {
    //     let discountForOldCar = {
    //         'Audi A4 B8': 15000,
    //         'Audi A6 4K': 20000,
    //         'Audi A8 D5': 25000,
    //         'Audi TT 8J': 14000,
    //     }

    //     if (discountForOldCar.hasOwnProperty(oldCarModel)) {
    //         let discount = discountForOldCar[oldCarModel];
    //         let finalPrice = newCarPrice - discount;

    //         return finalPrice;

    //     } else {
    //         return newCarPrice;
    //     }
    // },
    describe('Tests should check neCarCost function', () => {
        it('should return the final price for a old car', () => {
            expect(dealership.newCarCost('Audi A4 B8', 15_500)).to.equal(500);
            expect(dealership.newCarCost('Audi A6 4K', 20_500)).to.equal(500);
            expect(dealership.newCarCost('Audi A8 D5', 25_500)).to.equal(500);
            expect(dealership.newCarCost('Audi TT 8J', 14_500)).to.equal(500);
        });
    });
});