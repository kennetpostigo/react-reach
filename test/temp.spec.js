import {expect} from 'chai';
import {getName} from './../src/index.js';

describe('dummy test', function () {
    it('should pass', function () {
        expect(getName()).to.equal('kool');
    });
});
