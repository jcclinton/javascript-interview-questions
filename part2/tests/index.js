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
    testWordCountsIsDefined: function(test) {
        test.ok(main.wordCounts !== undefined);
        test.done();
    },
		testWordCounts: function(test) {
			var expected
				, result
				, equal
				;

			result = main.wordCounts(data.corpus);

			expected = {
				the: 17,
				ship: 2,
				drew: 1,
				on: 2,
				and: 8,
				had: 3,
				safely: 1,
				passed: 1,
				strait: 1,
				which: 2,
				some: 1,
				volcanic: 1,
				shock: 1,
				has: 1,
				made: 1,
				between: 1,
				calasareigne: 1,
				jaros: 1,
				islands: 1,
				doubled: 1,
				pomegue: 1,
				approached: 1,
				harbor: 1,
				under: 1,
				topsails: 1,
				jib: 2,
				spanker: 1,
				but: 1,
				so: 1,
				slowly: 1,
				sedately: 1,
				that: 3,
				idlers: 1,
				with: 3,
				instinct: 1,
				is: 1,
				forerunner: 1,
				of: 6,
				evil: 1,
				asked: 1,
				one: 1,
				another: 1,
				what: 1,
				misfortune: 1,
				could: 1,
				have: 1,
				happened: 1,
				board: 1,
				however: 1,
				those: 1,
				experienced: 1,
				in: 1,
				navigation: 1,
				saw: 1,
				plainly: 1,
				if: 1,
				any: 1,
				accident: 1,
				occurred: 1,
				it: 1,
				was: 3,
				not: 1,
				to: 1,
				vessel: 1,
				herself: 1,
				for: 1,
				she: 1,
				bore: 1,
				down: 1,
				all: 1,
				evidence: 1,
				being: 1,
				skilfully: 1,
				handled: 1,
				anchor: 1,
				a: 2,
				cockbill: 1,
				boom: 1,
				guys: 1,
				already: 1,
				eased: 1,
				off: 1,
				standing: 1,
				by: 1,
				side: 1,
				pilot: 2,
				who: 2,
				steering: 1,
				pharaon: 1,
				towards: 1,
				narrow: 1,
				entrance: 1,
				inner: 1,
				port: 1,
				young: 1,
				man: 1,
				activity: 1,
				vigilant: 1,
				eye: 1,
				watched: 1,
				every: 1,
				motion: 1,
				repeated: 1,
				each: 1,
				direction: 1
			}; // end expected

			equal = _.isEqual(expected, result);
			test.ok(equal);
			test.done();

		}
};

