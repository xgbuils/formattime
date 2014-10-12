var getRepetitions = require('../src/getRepetitions')
var util = require('util')

var array = [ 
    { input: '', output: '{}'},
    { input: '324, ,324', output: '{324, ,324}' },
    { input: '  4,5  ', output: [ 4, 5 ] },
    { input: '  4,  5   ', output: [ 4, 5 ] },
    { input: '  4  ,  5   ', output: [ 4, 5 ] },
    { input: '  4  ,5  ', output: [ 4, 5 ] },
    { input: '4  ,5  ', output: [ 4, 5 ] },
    { input: '4  ,5', output: [ 4, 5 ] },
    { input: '  4  ,5', output: [ 4, 5 ] },
    { input: '  4,5', output: [ 4, 5 ] },
    { input: '4,5', output: [ 4, 5 ] },
    { input: '  4a,5', output: '{  4a,5}' },
    { input: '  4, 5a', output: '{  4, 5a}' },
    { input: '  4,5,', output: '{  4,5,}' },
    { input: '  4,', output: [4] },
    { input: '  4', output: [4, 4] },
    { input: '4', output: [4, 4] },
    { input: '4  ', output: [4, 4] },
    { input: '  4  ', output: [4, 4] },
    { input: '  4,2,3  ', output: '{  4,2,3  }' },
    { input: ',2,3  ', output: '{,2,3  }' },
]

console.debug = function(myObject) {
    console.log(util.inspect(myObject, {showHidden: false, depth: null}));
}

module.exports = {
	'getRepetitions': function(test) {
    	array.forEach(function(objTest) {
    		var result = getRepetitions(objTest.input)
    		test.deepEqual(result, objTest.output)
    	})
    	test.done()
    }
}

