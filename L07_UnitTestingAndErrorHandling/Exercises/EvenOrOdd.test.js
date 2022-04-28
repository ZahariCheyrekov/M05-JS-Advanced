const { assert } = require('chai');
const testCase = require('./T02EvenOrOdd');

describe('Odd or Even Tests', () => {
    it('test returns odd when the string length is odd', () => {
        assert.equal(testCase.isOddOrEven('odd'), 'odd');
    });

    it('test should return even when the length of the string is even', () => {
        assert.equal(testCase.isOddOrEven('even'), 'even');
    });

    it('Should return undefined when input is not string', () => {
        assert.equal(testCase.isOddOrEven(1), undefined);
    });
});