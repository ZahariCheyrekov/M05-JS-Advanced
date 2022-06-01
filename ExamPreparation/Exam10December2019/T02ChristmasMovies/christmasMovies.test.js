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

    describe('Tests should check buyMovie function', () => {
        it('should return the correct message from the buyMovie function', () => {
            expect(instance.buyMovie('new', ['tc', 'ja', 'tc'])).to.equal(`You just got new to your collection in which tc, ja are taking part!`)
        });

        it('should return the given movies was already bought', () => {
            expect(instance.buyMovie('new', ['tc']));
            expect(() => instance.buyMovie('new', ['tc'])).to.throw(`You already own new in your collection!`);
        });
    });
});