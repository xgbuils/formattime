var parser = require('../src/parser')
var util = require('util')

var array = [ 
    { input: '', output: []},
    { input: 'D', output: [['Date', 1, 1]]},
    { input: 'M', output: [['Month', 1, 1]]},
    { input: 'Y', output: [['FullYear', 1, 1]]},
    { input: 'H', output: [['Hours', 1, 1]]},
    { input: 'h', output: [['Hours', 1, 1]]},
    { input: 'm', output: [['Minutes', 1, 1]]},
    { input: 's', output: [['Seconds', 1, 1]]},
    { input: 'x', output: ['x']}, //8
    { input: 'MM', output: [['Month', 2, 2]]},
    { input: 'aMM', output: ['a', ['Month', 2, 2]]},
    { input: 'aMMa', output: ['a', ['Month', 2, 2], 'a']},
    { input: 'MMa', output: [['Month', 2, 2], 'a']},
    { input: '[M]MM', output: ['M', ['Month', 2, 2]]},
    { input: '[M]MM[M]', output: ['M', ['Month', 2, 2], 'M']},
    { input: 'MM[M]', output: [['Month', 2, 2], 'M']},
    { input: 'MM{2,3}', output: [['Month', 3, 4]]},
    { input: 'MM{2,2}', output: [['Month', 3, 3]]},
    { input: 'MM{  2 ,3 }', output: [['Month', 3, 4]]},
    { input: 'MM{2}', output: [['Month', 3, 3]]},
    { input: 'MM{  2 }', output: [['Month', 3, 3]]},
    { input: 'MM{2,}', output: [['Month', 3]]},
    { input: 'MM{  2, }', output: [['Month', 3]]},
    { input: 'MM{,2}', output: [['Month', 2, 2], '{,2}']},
    { input: 'MM+', output: [['Month', 2]]},
    { input: 'MM*', output: [['Month', 1]]},
    { input: 'MM{2,3}{1,5}', output: [['Month', 3, 4], '{1,5}']},
    { input: 'MM{2,3}{  1,5 }', output: [['Month', 3, 4], '{  1,5 }']},
    { input: 'MM{2,3}+', output: [['Month', 3, 4], '+']},
    { input: 'MM{2,3}*', output: [['Month', 3, 4], '*']},
    { input: 'MM+{1,5}', output: [['Month', 2], '{1,5}']},
    { input: 'MM+{  1,5 }', output: [['Month', 2], '{  1,5 }']},
    { input: 'MM++', output: [['Month', 2], '+']},
    { input: 'MM+*', output: [['Month', 2], '*']},
    { input: 'MM*{1,5}', output: [['Month', 1], '{1,5}']},
    { input: 'MM*{  1,5 }', output: [['Month', 1], '{  1,5 }']},
    { input: 'MM*+', output: [['Month', 1], '+']},
    { input: 'MM**', output: [['Month', 1], '*']},
    { input: 'DD-MM-YYYY', output: [['Date', 2, 2], '-', ['Month', 2, 2], '-', ['FullYear', 4, 4]]}

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
/*
var objTest = array[8]
var result = parser(objTest.input, conversor1)
console.log(objTest.input)
console.log(result)*/

module.exports = {
	'parser': function(test) {
    	array.forEach(function(objTest) {
    		var result = parser(objTest.input, conversor1)
    		test.deepEqual(result, objTest.output)
    	})
    	test.done()
    }
}

