const { assert, expect } = require('chai');
const companyAdministration = require('./companyAdministration');

describe('CompanyAdministration Tests', () => {
    describe('Tests should check hiringEmployee function', () => {
        it('should throw exception for invalid position of the worker', () => {
            expect(() => companyAdministration.hiringEmployee('John', 'invalid', 10)).to.throw(Error);
        });

        it('should return that the employee is approved for the position with 10 years of exp', () => {
            const expectedMessage = 'John was successfully hired for the position Programmer.';
            const actualMessage = companyAdministration.hiringEmployee('John', 'Programmer', 10);
            assert.equal(expectedMessage, actualMessage);
        });

        it('should return that the employee is approved for the position with 3 years of exp', () => {
            const expectedMessage = 'John was successfully hired for the position Programmer.';
            const actualMessage = companyAdministration.hiringEmployee('John', 'Programmer', 3);
            assert.equal(expectedMessage, actualMessage);
        });

        it('should return that the employee is not approved for the position with 1 year of exp', () => {
            const expectedMessage = 'John is not approved for this position.';
            const actualMessage = companyAdministration.hiringEmployee('John', 'Programmer', 1);
            assert.equal(expectedMessage, actualMessage);
        });
    });

    describe('Tests should check calculateSalary function', () => {
        it('should throw error for input value of hours not a number', () => {
            expect(() => companyAdministration.calculateSalary('invalid')).to.throw(Error);
        });

        it('should throw error for input value of hours less than zero', () => {
            expect(() => companyAdministration.calculateSalary(-10)).to.throw(Error);
        });

        it('should calculate the total salary amount for less than 160 hours', () => {
            const expectedAmount = 150;
            const actualAmount = companyAdministration.calculateSalary(10);
            assert.equal(expectedAmount, actualAmount);
        });

        it('should calculate the total salary amount for more than 160 hours', () => {
            const expectedAmount = 4000;
            const actualAmount = companyAdministration.calculateSalary(200);
            assert.equal(expectedAmount, actualAmount);
        });
    });
});