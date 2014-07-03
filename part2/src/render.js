var $ = require('jquery');
var data = require('./data.js');
var main = require('./index.js');
var _ = require('underscore');

var render = function() {
	var wordCount
		, structure
		;
		
	// get word count
	wordCount = main.wordCounts(data.corpus);
	// count-asc is default checked radio box
	wordCount = sort(wordCount, 'count-asc');

	structure = build_structure();
	$('.content').html(structure);
	display(wordCount);


	$(document).on('change', 'input:radio', function(){
		var type = $(this).attr('value');
		wordCount = sort(wordCount, type);

		display(wordCount);
	});
};

$(function() {
    render();
});


///////////////// private functions


// used to build static structure of page
function build_structure(){
	var form
		, body
		, r1
		, r2
		, r3
		, r4
		;

	r1 = '<input type="radio" name="sort" value="count-asc" checked="checked">Count Asc<br>';
	r2 = '<input type="radio" name="sort" value="count-desc">Count Desc<br>';
	r3 = '<input type="radio" name="sort" value="alpha-asc">Alphabetical Asc<br>';
	r4 = '<input type="radio" name="sort" value="alpha-desc">Alphabetical Desc<br>';
	form = r1 + r2 + r3 + r4 + '<br/>';
	body = '<div class="word-count"></div>';

	return form + body;
}

// sorts wordCount based on type
function sort(wordCount, type){
	var wordList
		;

	// convert object to a list to make it easier to process
	wordList = encode(wordCount);
	wordList = _.sortBy(wordList, function(obj){
		var count = obj.count;
		var word = obj.word;
		var sorter = get_comparison(count, word, type);
		return sorter;
	});

	// sortBy can only sort in ascending order
	// so need to manually reverse this list
	if( type == 'alpha-desc' ){
		wordList = wordList.reverse();
	}

	// convert list back to its original form
	return decode(wordList);
}

// converts object to a list
function encode(wordCount){
	var list = [];

	_.each(wordCount, function(count, word){
		var obj = {"count": count, "word": word};
		list.push(obj);
	});

	return list;
}

// converts list to an object
function decode(wordList){
	var wordCount = {};

	_.each(wordList, function(obj){
		var count = obj.count;
		var word = obj.word;
		wordCount[word] = count;
	});

	return wordCount;
}

// returns operation that _.sortBy uses to compare objects
function get_comparison(count, word, type){
	switch(type){
		case "count-asc":
			return count * -1;
		case "count-desc":
			return count;
		case "alpha-asc":
			return word;
		case "alpha-desc":
			return word;
	}
}


// displays a wordCount object to the screen
function display(wordCount){
	var output = "";

	_.each(wordCount, function(count, word){
		output += word + ': ' + count + '<br/>';
	});

	$('.word-count').html(output);
}
