const { assert, expect } = require('chai');
const cinema = require('./cinema');

describe('Cinema Tests', () => {
    describe('Tests should check showMovies fucntion', () => {
        it('should return that they are currently no movies to show', () => {
            const expectedMessage = 'There are currently no movies to show.';
            const actualMessage = cinema.showMovies([]);
            assert.equal(expectedMessage, actualMessage);
        });

        it('should return the given movies from the array', () => {
            const expectedMessage = 'partOne, partTwo';
            const actualMessage = cinema.showMovies(['partOne', 'partTwo']);
            assert.equal(expectedMessage, actualMessage);
        });
    });

    describe('Tests should check ticketPrice function', () => {
        it('should throw error for invalid projection type', () => {
            expect(() => cinema.ticketPrice('invalid')).to.throw(Error);
        });

    });
});