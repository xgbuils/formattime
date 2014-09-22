var timeCharsSplit = require('../timeCharsSplit')
var util = require('util')

var array = [ 
    { input: '', output: []},
    { input: 'mmm', output: [ [ {name: 'Minutes'}, 3 ] ] },
    { input: 'MMMMmmmmmmm', output: [ [ {name: 'Month', correction: 1}, 4 ], [ {name: 'Minutes'}, 7 ] ] },
    { input: 'mmm', output: [ [ {name: 'Minutes'}, 3 ] ] },
    { input: 'ssssH', output: [ [ {name: 'Seconds'}, 4 ], [ {name: 'Hours'}, 1 ] ] },
    { input: 'ssssssDDD', output: [ [ {name: 'Seconds'}, 6 ], [ {name: 'Date'}, 3 ] ] },
    { input: 'YYsMMM', output: [ [ {name: 'FullYear'}, 2 ], [ {name: 'Seconds'}, 1 ], [ {name: 'Month', correction: 1}, 3 ] ] },
    { input: 'ssYYYMM', output: [ [ {name: 'Seconds'}, 2 ], [ {name: 'FullYear'}, 3 ], [ {name: 'Month', correction: 1}, 2 ] ] },
    { input: 'YssssHHHHh', output: [ [ {name: 'FullYear'}, 1 ], [ {name: 'Seconds'}, 4 ], [ {name: 'Hours'}, 4 ], [ {name: 'Hours'}, 1 ] ] },
    { input: 'YYYHHHYY', output: [ [ {name: 'FullYear'}, 3 ], [ {name: 'Hours'}, 3 ], [ {name: 'FullYear'}, 2 ] ] },
    { input: 'sh', output: [ [ {name: 'Seconds'}, 1 ], [ {name: 'Hours'}, 1 ] ] },
    { input: 'MM', output: [ [ {name: 'Month', correction: 1}, 2 ] ] },
    { input: 'mYmmMMM', output: [ [ {name: 'Minutes'}, 1 ], [ {name: 'FullYear'}, 1 ], [ {name: 'Minutes'}, 2 ], [ {name: 'Month', correction: 1}, 3 ] ] },
    { input: 'MMM', output: [ [ {name: 'Month', correction: 1}, 3 ] ] },
    { input: 'h', output: [ [ {name: 'Hours'}, 1 ] ] },
    { input: 'Hhhh', output: [ [ {name: 'Hours'}, 1 ], [ {name: 'Hours'}, 3 ] ] },
    { input: 'mmmmDDhhh', output: [ [ {name: 'Minutes'}, 4 ], [ {name: 'Date'}, 2 ], [ {name: 'Hours'}, 3 ] ] },
    { input: 'mhhhhmmmmm', output: [ [ {name: 'Minutes'}, 1 ], [ {name: 'Hours'}, 4 ], [ {name: 'Minutes'}, 5 ] ] },
    { input: 'hhhMMD', output: [ [ {name: 'Hours'}, 3 ], [ {name: 'Month', correction: 1}, 2 ], [ {name: 'Date'}, 1 ] ] },
    { input: 's', output: [ [ {name: 'Seconds'}, 1 ] ] },
    { input: 'mmmDDD', output: [ [ {name: 'Minutes'}, 3 ], [ {name: 'Date'}, 3 ] ] },
]

console.debug = function(myObject) {
    console.log(util.inspect(myObject, {showHidden: false, depth: null}));
}

module.exports = {
	'timeCharsSplit': function(test) {
    	array.forEach(function(objTest) {
    		var result = timeCharsSplit(objTest.input)
    		test.deepEqual(result, objTest.output)
    	})
    	test.done()
    }
}

