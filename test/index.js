'use strict';

const log = require('..');

const TestConsole = require('test-console');
const Code = require('code');
const Lab = require('lab');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const stdout = TestConsole.stdout;

describe('lib', () => {

    it('logs', (done) => {

        const output = stdout.inspectSync(() => {
            log('foo');
        });

        expect(output).to.equal(['foo\n']);

        return done();
    });
});
