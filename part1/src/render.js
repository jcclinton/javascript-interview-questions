var $ = require('jquery');
var data = require('./data.js');
var main = require('./index.js');
var _ = require('underscore');

var render = function() {
	var formattedObj = main.collapse(data.attrStructure);
	var output;

	output = build_output("", formattedObj, 0);
	$('.content').html(output);

	$(document).on('click', 'span.tree-sign', function(){
		var par = $(this).parent();
		var nodeEl = $('span.tree-content', par);
		var signEl = $(this);
		var sign = signEl.html();

		if(sign == '+'){
			signEl.html('-');
			nodeEl.hide();
		}else{
			signEl.html('+');
			nodeEl.show();
		}
	});

};

$(function() {
    render();
});


function build_output(content, obj, depth){
	_.each(obj, function(value, key){
		var width
			, pre
			, post
			, signEl
			, commonPrefix
			;

		width = 40 * depth;
		pre = '<div style="margin-left: '+width+'px;" class="tree-node">';
		post = '</div>';
		signEl = "<span class='tree-sign' style='cursor: pointer;'>+</span>";
		commonPrefix = pre + signEl + "<span class='tree-content'>" + key + ": ";

		if(_.isObject(value)){
			content += commonPrefix + "<br/>" + build_output("", value, depth+1) + "</span>" + post;
		}else{
			content += commonPrefix + value + "</span>" + post + "<br/>";
		}
	});

	return content;
}
