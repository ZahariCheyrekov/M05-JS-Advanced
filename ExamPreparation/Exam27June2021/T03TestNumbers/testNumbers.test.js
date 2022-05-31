const { assert, expect } = require('chai');
const testNumbers = require('./testNumbers');

describe('TestNumbers Tests', () => {
    describe('Tests should check sumNumbers function', () => {
        it('should throw error for invalid first type parameter', () => {
            expect(testNumbers.sumNumbers('invalid', 10)).to.be.undefined;
        });

        it('should throw error for invalid second type parameter', () => {
            expect(testNumbers.sumNumbers(10, 'invalid')).to.be.undefined;
        });

       

                // sumNumbers: function (num1, num2) {
        //     let sum = 0;

        //     if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
        //         return undefined;
        //     } else {
        //         sum = (num1 + num2).toFixed(2);
        //         return sum;
        //     }
        // },
    });
});