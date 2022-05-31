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

    describe('Test should check findBook function', () => {
        it('should throw error for no books currently available', () => {
            expect(() => library.findBook([], 'Elon Musk')).to.throw(Error);
        });

        it('should return that the desired book wass found', () => {
            const expectedMessage = 'We found the book you want.';
            const actualMessage = library.findBook(['Elon Musk', 'SomethingElse', 'ThatBook'], 'Elon Musk');
            assert.equal(expectedMessage, actualMessage);
        });

        it('should return taht the desired book wasn\'t found', () => {
            const expectedMessage = 'The book you are looking for is not here!';
            const actualMessage = library.findBook(['Steve Jobs', 'SomethingElse', 'ThatBook'], 'Elon Musk');
            assert.equal(expectedMessage, actualMessage);
        });
    });

    describe('Tests should check arrangeTheBooks function', () => {
        it('should throw error for countBooks value not a number', () => {
            expect(() => library.arrangeTheBooks('invalid')).to.throw(Error);
        });

        it('should throw error for countBooks value less than zero', () => {
            expect(() => library.arrangeTheBooks(-10)).to.throw(Error);
        });

        it('shold return that the books were arranged for equal availableSpace and countBooks', () => {
            const expectedMessage = 'Great job, the books are arranged.';
            const actualMessage = library.arrangeTheBooks(40);
            assert.equal(expectedMessage, actualMessage);
        });

        it('shold return that the books were arranged for more availableSpace than countBooks', () => {
            const expectedMessage = 'Great job, the books are arranged.';
            const actualMessage = library.arrangeTheBooks(10);
            assert.equal(expectedMessage, actualMessage);
        });

        it('should return that more shelves need to be purchased', () => {
            const expectedMessage = 'Insufficient space, more shelves need to be purchased.';
            const actualMessage = library.arrangeTheBooks(100);
            assert.equal(expectedMessage, actualMessage);
        });
    });
});