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

    
    });
});