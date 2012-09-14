/**
 * @author myGame
 */


var add = function(){
	return console.log("this is the all new style of writing code.");
};

function foo(){
	alert('global foo');
}

var bar = function() {
	alert('global bar');
};

var baz = function baz()  {};

function hoistMe(){
	console.log(typeof foo);
	console.log(typeof bar);
	
	
	foo();
	bar();
	
	function foo(){
	alert('local foo');
};

bar = function() {
	alert('local bar');
};

};

