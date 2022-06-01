const { assert, expect } = require('chai');
const companyAdministration = require('./companyAdministration');

describe('CompanyAdministration Tests', () => {
    describe('Tests should check hiringEmployee function', () => {
      
    });

    describe('Tests should check calculateSalary function', () => {
       

       
    });

    describe('Tests should check firedEmployee function', () => {
   

        it('should return empty string from array of one value', () => {
            const expectedResult = '';
            const actualResult = companyAdministration.firedEmployee(['John'], 0);
            assert.equal(expectedResult, actualResult);
        });

    });
});