var expect = require('chai').expect;
var index = require('./../src/index.js');

describe('dummy test', function () {
    it('should pass', function () {
        expect(index.name()).to.equal('kool');
    });
});
