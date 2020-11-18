

let myMixins = (function(){
	return {
		glideMixin: function(obj) {
			obj.glide = function() {
				console.log("Gliding on the water");
			};
		},
	
		flyMixin: function(obj) {
			obj.fly = function() {
				console.log("Flying, wooosh!");
			};
		},
	};
	
})();
