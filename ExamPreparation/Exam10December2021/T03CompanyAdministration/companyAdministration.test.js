const { assert, expect } = require('chai');
const companyAdministration = require('./companyAdministration');

describe('CompanyAdministration Tests', () => {
    describe('Tests should check hiringEmployee function', () => {
      
    });

    describe('Tests should check calculateSalary function', () => {
       

       
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

    });
});