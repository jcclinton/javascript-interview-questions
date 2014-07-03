var _ = require('underscore');

module.exports = {
    collapse: function(obj) {
			var outObj = {}
				;

			_.each(obj, function(el){
				var key
					, val
					;

				key = el["tag"];
				val = el["value"];
				if( _.isArray(val) ){
					outObj[key] = this.collapse(val);
				}else{
					outObj[key] = val;
				}
			}, this);

			return outObj;
    }
}
