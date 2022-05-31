const { assert, expect } = require('chai');
const cinema = require('./cinema');

describe('Cinema Tests', () => {
    describe('Tests should check showMovie function', () => {
        // showMovies: function (movieArr) {
        //     if (movieArr.length == 0) {
        //         return 'There are currently no movies to show.';
        //     } else {
        //         let result = movieArr.join(', ');
        //         return result;
        //     }
        // },

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
});