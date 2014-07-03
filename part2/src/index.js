var _ = require('underscore');
var data = require('./data.js');

module.exports = {

		wordCounts: function(s){
			var stopChars
				, words
				, wordCount = {}
				;
				
			stopChars = /[ ,-.?!;]/;
			words = s.split(stopChars);

			_.each(words, function(word){
				// filter out empty string caused by s.split
				if(word){
					word = word.toLowerCase();
					if (wordCount[word] == undefined){
						wordCount[word] = 1;
					}else{
						wordCount[word]++;
					}
				}
			});

			return wordCount;
		}
}
