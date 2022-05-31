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

        it('should throw error for input value of null', () => {
            expect(() => companyAdministration.calculateSalary(null)).to.throw(Error);
        });

        it('should throw error for input value of hours less than zero', () => {
            expect(() => companyAdministration.calculateSalary(-10)).to.throw(Error);
        });

        it('should calculate the total salary amount for less than 160 hours', () => {
            const expectedAmount = 2400;
            const actualAmount = companyAdministration.calculateSalary(160);
            assert.equal(expectedAmount, actualAmount);
        });

        it('should calculate the total salary amount for 1 hour', () => {
            const expectedAmount = 15;
            const actualAmount = companyAdministration.calculateSalary(1);
            assert.equal(expectedAmount, actualAmount);
        });

        it('should calculate the total salary amount for 161 hours', () => {
            const expectedAmount = 3415;
            const actualAmount = companyAdministration.calculateSalary(161);
            assert.equal(expectedAmount, actualAmount);
        });

        it('should calculate the total salary amount for 0 hours', () => {
            const expectedAmount = 0;
            const actualAmount = companyAdministration.calculateSalary(0);
            assert.equal(expectedAmount, actualAmount);
        });

        it('should calculate the total salary amount for more than 160 hours', () => {
            const expectedAmount = 4000;
            const actualAmount = companyAdministration.calculateSalary(200);
            assert.equal(expectedAmount, actualAmount);
        });

        it('should calculate the total salary amount for 160 hours', () => {
            const expectedAmount = 300;
            const actualAmount = companyAdministration.calculateSalary(20);
            assert.equal(expectedAmount, actualAmount);
        });
    });

    describe('Tests should check firedEmployee function', () => {
        it('should throw error for invalid input value of employees different from array', () => {
            expect(() => companyAdministration.firedEmployee('invalid', 2)).to.throw(Error);
        });

        it('should throw error for invalid input value of index different from number', () => {
            expect(() => companyAdministration.firedEmployee(['John'], 'invalid')).to.throw(Error);
        });

        it('should throw error for invalid input values', () => {
            expect(() => companyAdministration.firedEmployee('invalid', 'invalid')).to.throw(Error);
        });

        it('should throw error for invalid index with value less than zero', () => {
            expect(() => companyAdministration.firedEmployee(['John'], -10)).to.throw(Error);
        });

        it('should throw error for invalid index with value floating point number', () => {
            expect(() => companyAdministration.firedEmployee(['John'], 5.56789)).to.throw(Error);
        });

        it('should throw error for invalid index with value bigger than the array length', () => {
            expect(() => companyAdministration.firedEmployee(['John'], 10)).to.throw(Error);
        });

        it('should throw error for invalid index with value equal to the array length', () => {
            expect(() => companyAdministration.firedEmployee(['John'], 1)).to.throw(Error);
        });

        it('should throw error for invalid index with value NaN', () => {
            expect(() => companyAdministration.firedEmployee(['John'], NaN)).to.throw(Error);
        });

        it('should throw error for only one value given', () => {
            expect(() => companyAdministration.firedEmployee(10)).to.throw(Error);
        });

        it('should throw error for only array given value', () => {
            expect(() => companyAdministration.firedEmployee(['John'])).to.throw(Error);
        });

        it('should throw error for no given values', () => {
            expect(() => companyAdministration.firedEmployee()).to.throw(Error);
        });

        it('should return empty string from array of one value', () => {
            const expectedResult = '';
            const actualResult = companyAdministration.firedEmployee(['John'], 0);
            assert.equal(expectedResult, actualResult);
        });

        it('should return every employee with different array index from the input index value', () => {
            const expectedResult = 'a, b, c';
            const actualResult = companyAdministration.firedEmployee(['a', 'b', 'c', 'd'], 3);
            assert.equal(expectedResult, actualResult);
        });
    });
});