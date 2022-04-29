const { assert } = require('chai');
const testCase = require('./T03CharLookup');

describe('Char Lookup Tests', () => {
    it('should return "Incorrect index" if index is lower than zero', () => {
        assert.equal(testCase.lookupChar('string', -1), "Incorrect index");
    });

    it('should return undefined if second arg is not integer', () => {
        assert.equal(testCase.lookupChar('string', 1.5), undefined);
    });

    it('should return correct character', () => {
        assert.equal(testCase.lookupChar('string', 0), 's');
    });

    it('should return undefined if first arg is not string', () => {
        assert.equal(testCase.lookupChar(1, 1), undefined);
    });

    it('should return "Incorrect index" if index is bigger than string length', () => {
        assert.equal(testCase.lookupChar('string', 10), "Incorrect index");
    });
    it('should return correct character', () => {
        assert.equal(testCase.lookupChar('Pesho', 4), 'o');
    });

    it('should return undefined if second arg is not integer', () => {
        assert.equal(testCase.lookupChar('string', '3'), undefined);
    });
});