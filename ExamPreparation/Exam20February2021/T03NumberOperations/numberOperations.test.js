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
});