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

        it('should return price for projection type Premiere', () => {
            const expectedPrice = 12.00;
            const actualPrice = cinema.ticketPrice('Premiere');
            assert.equal(expectedPrice, actualPrice);
        });

        it('should return price for projection type Normal', () => {
            const expectedPrice = 7.50;
            const actualPrice = cinema.ticketPrice('Normal');
            assert.equal(expectedPrice, actualPrice);
        });

        it('should return price for projection type Discount', () => {
            const expectedPrice = 5.50;
            const actualPrice = cinema.ticketPrice('Discount');
            assert.equal(expectedPrice, actualPrice);
        });
    });

    describe('Tests should check swapSeatsInHall function', () => {
        const expectedMessage = 'Unsuccessful change of seats in the hall.';
        // swapSeatsInHall: function (firstPlace, secondPlace) {
        //     if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
        //         !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 ||
        //         firstPlace === secondPlace) {
        //         return "Unsuccessful change of seats in the hall.";
        //     } else {
        //         return "Successful change of seats in the hall.";
        //     }
        // }

        it('should return that the swap was unsuccessful for invalid first value', () => {
            const actualMessage = cinema.swapSeatsInHall('invalid', 10);
            assert.equal(expectedMessage, actualMessage);
        });

        it('should return that the swap was unsuccessful for invalid second value', () => {
            const actualMessage = cinema.swapSeatsInHall(10, 'invalid');
            assert.equal(expectedMessage, actualMessage);
        });

        it('should return that the swap was unsuccessful for invalid input values', () => {
            const actualMessage = cinema.swapSeatsInHall('invalid', 'invalid');
            assert.equal(expectedMessage, actualMessage);
        });

        it('should return that the swap was unsuccessful for first value for -10', () => {
            const actualMessage = cinema.swapSeatsInHall(-10, 10);
            assert.equal(expectedMessage, actualMessage);
        });

        it('should return that the swap was unsuccessful for second value for -10', () => {
            const actualMessage = cinema.swapSeatsInHall(10, -10);
            assert.equal(expectedMessage, actualMessage);
        });

        it('should return that the swap was unsuccessful for first value for 0', () => {
            const actualMessage = cinema.swapSeatsInHall(0, 10);
            assert.equal(expectedMessage, actualMessage);
        });

        it('should return that the swap was unsuccessful for second value for 0', () => {
            const actualMessage = cinema.swapSeatsInHall(10, 0);
            assert.equal(expectedMessage, actualMessage);
        });

        it('should return that the swap was unsuccessful for invalid 0 values', () => {
            const actualMessage = cinema.swapSeatsInHall(0, 0);
            assert.equal(expectedMessage, actualMessage);
        });
    });
});