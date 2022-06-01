const { expect } = require('chai');
const { before } = require('mocha');
const { Repository } = require('./repository');

describe("Repository Tests", () => {
    let instance = {};

    beforeEach(() => {
        beforeEach(() => instance = new Repository({
            name: 'string',
            age: 'number',
            birthday: 'object'
        }))
    });
});