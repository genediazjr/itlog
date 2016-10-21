'use strict';

const rewire = require('rewire');
const Code = require('code');
const Lab = require('lab');

const lab = exports.lab = Lab.script();
const beforeEach = lab.beforeEach;
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const itlog = rewire('..');
const internals = {
    write: function (msg) {

        internals.message = msg;
    }
};

beforeEach((done) => {

    internals.message = null;

    return done();
});

describe('lib', () => {

    it('logs with process', (done) => {

        itlog.__set__('process', { stdout: { write: internals.write } });

        itlog('foo');

        expect(internals.message).to.equal('foo\n');

        return done();
    });

    it('logs without process', (done) => {


        itlog.__set__('process', undefined);
        itlog.__set__('console', { log: internals.write });

        itlog('foo');

        expect(internals.message).to.equal('foo\n');

        return done();
    });
});
