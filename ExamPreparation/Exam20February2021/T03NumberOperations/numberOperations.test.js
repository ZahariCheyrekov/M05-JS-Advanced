const { assert, expect } = require('chai');
const numberOperations = require('./numberOperations');

describe('NumberOperations Tests', () => {
    describe('Tests should check powNumber function', () => {
        it('should return correct value of pow number', () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
            expect(numberOperations.powNumber(4)).to.equal(16);
            expect(numberOperations.powNumber(10)).to.equal(100);
            expect(numberOperations.powNumber(0)).to.equal(0);
            expect(numberOperations.powNumber(-2)).to.equal(4);
        });
    });

    describe('Tests should check numberChecker function', () => {
        // numberChecker: function (input) {
        //     input = Number(input);

        //     if (isNaN(input)) {
        //         throw new Error('The input is not a number!');
        //     }

        //     if (input < 100) {
        //         return 'The number is lower than 100!';
        //     } else {
        //         return 'The number is greater or equal to 100!';
        //     }
        // },
        it('should throw error for input value wich is NaN', () => {
            expect(() => numberOperations.numberChecker('abc')).to.throw(Error);
            expect(() => numberOperations.numberChecker()).to.throw(Error);
        });

        it('should retutn that the number is lower than 100', () => {
            expect(numberOperations.numberChecker(99)).to.contain('The number is lower than 100!');
            expect(numberOperations.numberChecker(1)).to.contain('The number is lower than 100!');
        });

        it('should retutn that the number is greaterthan or equal to 100', () => {
            expect(numberOperations.numberChecker(100)).to.contain('The number is greater or equal to 100!');
        });

        it('should retutn that the number is greater than 100', () => {
            expect(numberOperations.numberChecker(110)).to.contain('The number is greater or equal to 100!');
        });
    });
});