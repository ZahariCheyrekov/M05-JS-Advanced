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
});