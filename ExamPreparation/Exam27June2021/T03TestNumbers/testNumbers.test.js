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

        it('should throw error for invalid type parameters', () => {
            expect(testNumbers.sumNumbers('invalid', 'invalid')).to.be.undefined;
        });

        it('should retutrn the correct result by adding two numbers', () => {
            expect(testNumbers.sumNumbers(2, 2)).to.equal('4.00');
            expect(testNumbers.sumNumbers(4, -2)).to.equal('2.00');
            expect(testNumbers.sumNumbers(2, -4)).to.equal('-2.00');
        });
    });
});