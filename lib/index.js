'use strict';

const itlog = function (message) {

    if (typeof process !== 'undefined' && process.stdout) {
        process.stdout.write(`${message}\n`);
    }
    else {
        console.log(`${message}\n`);
    }
};

// $lab:coverage:off$
if (typeof module !== 'undefined' && module.exports) {
    module.exports = itlog;
}
// $lab:coverage:on$
