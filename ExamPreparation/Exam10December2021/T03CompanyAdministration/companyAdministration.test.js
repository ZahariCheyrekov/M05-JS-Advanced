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

  
});