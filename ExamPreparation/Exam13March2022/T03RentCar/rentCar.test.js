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

        it('should rent a car successfully and return the correct message', () => {
            const expectedMessage = 'You rent a car!';
            const actualMessage = rentCar.checkBudget(5, 2, 100);
            assert.equal(expectedMessage, actualMessage);
        });

        it('should rent a car successfully and return the correct message for the exact amount of budget', () => {
            const expectedMessage = 'You rent a car!';
            const actualMessage = rentCar.checkBudget(10, 10, 100);
            assert.equal(expectedMessage, actualMessage);
        });

        it('should return that the user need a bigger budget', () => {
            const expectedMessage = 'You need a bigger budget!';
            const actualMessage = rentCar.checkBudget(10, 12, 100);
            assert.equal(expectedMessage, actualMessage);
        });
    });

    describe('Tests should calculate price of the car', () => {
        it('should throw error for invalid model value with of type number', () => {
            expect(() => rentCar.calculatePriceOfCar(10, 10)).to.throw(Error);
        });

        it('should throw error for invalid days value with of type string', () => {
            expect(() => rentCar.calculatePriceOfCar('Audi', 'notValid')).to.throw(Error);
        });

        it('should throw error for invalid input calues', () => {
            expect(() => rentCar.calculatePriceOfCar(10, 'notValid')).to.throw(Error);
        });

        it('should trow error for no such model in the car catalogue', () => {
            expect(() => rentCar.calculatePriceOfCar('Lambo', 10)).to.throw(Error);
        });

        it('should calculate the price for the rent of the car correctly', () => {
            const expectedMessage = 'You choose Audi and it will cost $360!';
            const actualMessage = rentCar.calculatePriceOfCar('Audi', 10);
            assert.equal(expectedMessage, actualMessage);
        });
    });
});