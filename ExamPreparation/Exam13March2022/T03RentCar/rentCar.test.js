const { assert, expect } = require('chai');
const rentCar = require('./rentCar');

describe('RentCar Tests', () => {
    describe('Tests should check budget for rentig a car', () => {
        it('should throw error for not integer value for the costPerDay', () => {
            expect(() => rentCar.checkBudget('a', 10, 10)).to.throw(Error);
        });

        it('should throw error for not integer value for the days', () => {
            expect(() => rentCar.checkBudget(10, 'a', 10)).to.throw(Error);
        });

        it('should throw error for not integer value for the budget', () => {
            expect(() => rentCar.checkBudget(10, 10, 'a')).to.throw(Error);
        });

        it('should throw error for not integer value for the costPerDay and not integer value for the days', () => {
            expect(() => rentCar.checkBudget('a', 'a', 10)).to.throw(Error);
        });

        it('should throw error for not integer value for the days and not integer value for the budget', () => {
            expect(() => rentCar.checkBudget(10, 'a', 'a')).to.throw(Error);
        });

        it('should throw error for not integer value for the costPerDay and not integer value for the budget', () => {
            expect(() => rentCar.checkBudget('a', 10, 'a')).to.throw(Error);
        });

        it('should throw error for not integer values', () => {
            expect(() => rentCar.checkBudget('a', 'a', 'a')).to.throw(Error);
        });
    });
});