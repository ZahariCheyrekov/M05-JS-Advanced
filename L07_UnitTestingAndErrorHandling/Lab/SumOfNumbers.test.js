const { assert } = require('chai');
const testSuitcase = require('./T04SumOfNumbers');

describe('SumOfNumbers Tests', () => {

    it('should return correct result for one element array', () => {
        assert.equal(testSuitcase.sum([1, 2, 3]), 6);
    });

    it('should return zero for an empty array of numbers', () => {
        assert.equal(testSuitcase.sum([]), 0);
    });

    it('should return NaN when invalid data is entered', () => {
        assert(Number.isNaN(testSuitcase.sum(['a'])));
    });
});