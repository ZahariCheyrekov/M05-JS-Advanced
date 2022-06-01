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

    describe('Tests should check discardMovie function', () => {
        it('should throw error because movie was bought but is not watched', () => {
            instance.buyMovie('Black', ['Sneyp']);
            instance.buyMovie('White', ['Snayp']);
            expect(() => instance.discardMovie('Black')).to.throw('Black is not watched');
            expect(() => instance.discardMovie('White')).to.throw('White is not watched');
        });

        it('should throw error because movies is not in the collection', () => {
            expect(() => instance.discardMovie('Cobra')).to.throw('Cobra is not at your collection!');
            expect(() => instance.discardMovie('Sity')).to.throw('Sity is not at your collection!');
        });

        it('should return the correct message for discarted movie', () => {
            instance.buyMovie('Black Eyes', ['Onno']);
            instance.watched['Black Eyes'] = 1;
            expect(instance.discardMovie('Black Eyes')).to.equal(`You just threw away Black Eyes!`);
        });
    });

    describe('Tests should check buyMovie function', () => {
        it('should return the correct message from the buyMovie function', () => {
            expect(instance.buyMovie('new', ['tc', 'ja', 'tc'])).to.equal(`You just got new to your collection in which tc, ja are taking part!`);
        });

        it('should return the given movies was already bought', () => {
            expect(instance.buyMovie('new', ['tc']));
            expect(() => instance.buyMovie('new', ['tc'])).to.throw(`You already own new in your collection!`);
        });
    });

    describe('Tests should check watchMovie function', () => {
        it('should throw error for no such movie in the collection', () => {
            expect(() => instance.watchMovie('NoSuchMovie')).to.throw('No such movie in your collection!');
        });

        it('should add watched movie to the watched movie array correctly', () => {
            instance.buyMovie('NewOne', ['Someone']);
            instance.watchMovie('NewOne');
            expect(instance.watched['NewOne']).to.equal(1);
        });
    });

    describe('Tests should check favouriteMovie function', () => {
        it('should throw error for no watched movies yet', () => {
            expect(() => instance.favouriteMovie()).to.throw('You have not watched a movie yet this year!');
        });

        it('should return the correct message for the favourite movie', () => {
            instance.watched['FavouriteMovie'] = 1;
            instance.watched['FavouriteMovie'] = 2;
            expect(instance.favouriteMovie()).to.equal('Your favourite movie is FavouriteMovie and you have watched it 2 times!');
        });
    });

    describe('Tests should check mostStarredActor', () => {
        it('should throw error if there are not any watched movies yet', () => {
            expect(() => instance.mostStarredActor()).to.throw('You have not watched a movie yet this year!');
        });

      
    });
});