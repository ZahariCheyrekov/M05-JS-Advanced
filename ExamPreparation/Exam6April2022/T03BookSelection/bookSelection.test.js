const { assert } = require('chai');
const bookSelection = require('./bookSelection');

describe('BookSelection Tests', () => {
    describe('Tests should check if the genre is suitable', () => {
        it('should return not suitable books for kids at the age of 12', () => {
            const expectedMessage = 'Books with Thriller genre are not suitable for kids at 12 age';
            const actualMessage = bookSelection.isGenreSuitable('Thriller', 12);
            assert.equal(expectedMessage, actualMessage);
        });

        it('should return not suitable books for kids at the age of less than 13', () => {
            const expectedMessage = 'Books with Horror genre are not suitable for kids at 5 age';
            const actualMessage = bookSelection.isGenreSuitable('Horror', 5);
            assert.equal(expectedMessage, actualMessage);
        });

        it('should return that books are suitable for kids at the age of 15', () => {
            const expectedMessage = 'Those books are suitable';
            const actualMessage = bookSelection.isGenreSuitable('Horror', 15);
            assert.equal(expectedMessage, actualMessage);
        });

        it('should return that books are suitable for kids at the age of 18', () => {
            const expectedMessage = 'Those books are suitable';
            const actualMessage = bookSelection.isGenreSuitable('Thriller', 18);
            assert.equal(expectedMessage, actualMessage);
        });
    });
});