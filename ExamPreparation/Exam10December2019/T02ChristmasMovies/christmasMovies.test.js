const { assert, expect } = require('chai');
const ChristmasMovies = require('./christmasMovies');

describe('ChristmasMovies Tests', () => {
    let instance = {};
    beforeEach(() => instance = new ChristmasMovies());

    describe('Test should check the constructor functionality', () => {
        it('should return that the instance properties are not undefined', () => {
            expect(instance.movieCollection).to.not.be.undefined;
            expect(instance.watched).to.not.be.undefined;
            expect(instance.actors).to.not.be.undefined;
        });
    });
});