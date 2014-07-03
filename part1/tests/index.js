var main = require('../src/index.js');
var data = require('../src/data.js');
var _ = require('underscore');

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
    },
		testCollapseFunction: function(test){
			var obj = [
				{ "tag": "foo", "value": true },
				{ "tag": "bar", "value":
					[
						{ "tag": "baz", value: 456 },
						{ "tag": "bam", value: "abc" }
					]
				}
			];

			var output = main.collapse(obj);

			var expected = {
				"foo": true,
				"bar": {
					"baz": 456,
					"bam": "abc"
				}
			};

			var result = _.isEqual(expected, output);
			test.ok(result);
			test.done();
		}
};

