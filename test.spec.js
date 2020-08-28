const expect = require('chai').expect;

const tests = require('./test');

it('pow should exist within test file as a number', function() {
    expect(tests.pow).to.exist;
    expect(tests.pow).to.be.a('string');
    expect(tests.pow).to.have.lengthOf(4);
})
