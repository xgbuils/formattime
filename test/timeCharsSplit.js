var timeCharsSplit = require('../timeCharsSplit')
var util = require('util')

var array = [ 
    { input: '', output: []},
    { input: 'mmm', output: [ ['Minutes', 3, 3 ] ] },
    { input: 'MMMMmmmmmmm', output: [ ['Month', 4, 4], ['Minutes', 7, 7 ] ] },
    { input: 'mmm', output: [ ['Minutes', 3, 3] ] },
    { input: 'ssssH', output: [ ['Seconds', 4, 4], ['Hours', 1, 1] ] },
    { input: 'ssssssDDD', output: [ ['Seconds', 6, 6], ['Date', 3, 3] ] },
    { input: 'YYsMMM', output: [ ['FullYear', 2, 2], ['Seconds', 1, 1], ['Month', 3, 3] ] },
    { input: 'ssYYYMM', output: [ ['Seconds', 2, 2], ['FullYear', 3, 3], ['Month', 2, 2] ] },
    { input: 'YssssHHHHh', output: [ ['FullYear', 1, 1], ['Seconds', 4, 4], ['Hours', 4, 4], ['Hours', 1, 1] ] },
    { input: 'YYYHHHYY', output: [ ['FullYear', 3, 3], ['Hours', 3, 3], ['FullYear', 2, 2] ] },
    { input: 'sh', output: [ ['Seconds', 1, 1], ['Hours', 1, 1] ] },
    { input: 'MM', output: [ ['Month', 2, 2] ] },
    { input: 'mYmmMMM', output: [ ['Minutes', 1, 1], ['FullYear', 1, 1], ['Minutes', 2, 2], ['Month', 3, 3] ] },
    { input: 'MMM', output: [ ['Month', 3, 3] ] },
    { input: 'h', output: [ ['Hours', 1, 1] ] },
    { input: 'Hhhh', output: [ ['Hours', 1, 1], ['Hours', 3, 3] ] },
    { input: 'mmmmDDhhh', output: [ ['Minutes', 4, 4], ['Date', 2, 2], ['Hours', 3, 3] ] },
    { input: 'mhhhhmmmmm', output: [ ['Minutes', 1, 1], ['Hours', 4, 4], ['Minutes', 5, 5] ] },
    { input: 'hhhMMD', output: [ ['Hours', 3, 3], ['Month', 2, 2], ['Date', 1, 1] ] },
    { input: 's', output: [ ['Seconds', 1, 1] ] },
    { input: 'mmmDDD', output: [ ['Minutes', 3, 3], ['Date', 3, 3] ] },
]

console.debug = function(myObject) {
    console.log(util.inspect(myObject, {showHidden: false, depth: null}));
}

var conversor1 = {
    D: 'Date',
    M: 'Month',
    Y: 'FullYear',
    H: 'Hours',
    h: 'Hours',
    m: 'Minutes',
    s: 'Seconds',
}

module.exports = {
	'timeCharsSplit': function(test) {
    	array.forEach(function(objTest) {
    		var result = timeCharsSplit(objTest.input, conversor1)
    		test.deepEqual(result, objTest.output)
    	})
    	test.done()
    }
}

