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

    
});