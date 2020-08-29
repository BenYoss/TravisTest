const expect = require('chai').expect;
const server = require('./index');

describe('test', () => {
    it('should output TRAVIS CI!', () => {
        expect('ci with travis!').to.equal('ci with travis!');
    });
});