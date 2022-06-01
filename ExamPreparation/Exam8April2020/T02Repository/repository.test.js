const { expect } = require('chai');
const { Repository } = require('./repository');

describe("Repository Tests", () => {
    let instance = {};

    beforeEach(() => instance = new Repository({
        name: 'string',
        age: 'number',
        birthday: 'object'
    }));

    describe('Test should check number of Map elements', () => {
        it('should return that Map size is 0', () => {
            expect(instance.count).to.equal(0);
        });
    });

    describe('Test should add valid object to the instance', () => {
        it('should return zero id for only one object added', () => {
            expect(instance.add({ name: 'ji', age: 10, birthday: {} })).to.equal(0);
        });
    });

    describe('Tests should check getId function', () => {
        it('should return that entity with the given id does not exist', () => {
            expect(() => instance.getId(10)).to.throw('Entity with id: 10 does not exist!');
        });
    });

  
});