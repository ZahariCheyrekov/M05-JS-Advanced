const { assert, expect } = require('chai');
const library = require('./library');

describe('Library Tests', () => {
    describe('Tests should check calcPriceOfBook function', () => {
        it('should throw error for invalid type of first parameter', () => {
            expect(() => library.calcPriceOfBook(10, 10)).to.throw(Error);
        });

        it('should throw error for invalid type of second parameter', () => {
            expect(() => library.calcPriceOfBook('Steve Jobs', 'invalid')).to.throw(Error);
        });

        it('should throw error for invalid input type parameters', () => {
            expect(() => library.calcPriceOfBook(10, 'invalid')).to.throw(Error);
        });

        it('should return that price for the book of year 2011 is 20', () => {
            const expectedMessage = 'Price of Steve Jobs is 20.00';
            const actualMessage = library.calcPriceOfBook('Steve Jobs', 2011);
            assert.equal(expectedMessage, actualMessage);
        });

        it('should return the price for the book of year 1800', () => {
            const expectedMessage = 'Price of IDK is 10.00';
            const actualMessage = library.calcPriceOfBook('IDK', 1800);
            assert.equal(expectedMessage, actualMessage);
        });

        it('should return the price for the book of year 1980', () => {
            const expectedMessage = 'Price of Heroes is 10.00';
            const actualMessage = library.calcPriceOfBook('Heroes', 1980);
            assert.equal(expectedMessage, actualMessage);
        });
    });
});