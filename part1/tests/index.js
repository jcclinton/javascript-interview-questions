var main = require('../src/index.js');
var data = require('../src/data.js');

module.exports = {

    // TODO: implement tests

    setUp: function (callback) {
        callback();
    },
    tearDown: function (callback) {
        callback();
    },
    testCollapseFunctionIsDefined: function(test) {
        test.ok(main.collapse !== undefined);
        test.done();
    }
};

