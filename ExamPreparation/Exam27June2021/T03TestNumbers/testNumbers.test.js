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

    describe('Tests should check numberChecker function', () => {
        it('should return correct answer with odd value', () => {
            expect(testNumbers.numberChecker(1)).to.contain('odd');
        });

        it('should return correct answer with even value', () => {
            expect(testNumbers.numberChecker(2)).to.contain('even');
        });

        it('should return correct answer with string even value', () => {
            expect(testNumbers.numberChecker('2')).to.contain('even');
        });

        it('should return correct answer with string odd value', () => {
            expect(testNumbers.numberChecker('1')).to.contain('odd');
        });

        it('should throw error for not valid input type', () => {
            expect(() => testNumbers.numberChecker('invalid')).to.throw(Error);
        });

        it('should throw error for not valid input type of NaN', () => {
            expect(() => testNumbers.numberChecker(NaN)).to.throw(Error);
        });
    });
});