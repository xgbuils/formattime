//var y = /([DMYHhms]+)|(\[[^\]]*\])|(\{[^\[\}]+\})|([^DMYHhms]+)/g
var REGEXP = /([DMYHhms]+)|\[([^\]]+)\]|\{([\d,\s]+)|([+*])\}/g

var conversion = {
    D: 'Date',
    M: 'Month',
    Y: 'FullYear',
    H: 'Hours',
    h: 'Hours',
    m: 'Minutes',
    s: 'Seconds',
}

function timeSplitter(str) {
    var n = str.length
    var init = true
    var ch, count = 0
    var array = []
    var i = 0
    var text = ''
    while (i <= n) {
        if (init) {
            ch = str[i]
            count = 1
            init = false
            ++i
        } else {
            if (ch === str[i]) {
                ++count
                ++i
            } else {
                array.push([conversion[ch], count])
                ch = undefined
                init = true
            }
        }
    }

    return array
}

function parser (str) {
	var array = []
	var index = 0
	var begin = 0
	var braces = false
	str.replace(REGEXP, function(m, a, b, c, d, offset) {
        if(begin !== offset) {
		    array[index] = str.substring(begin, offset)
		    braces = false
		    ++index
		}
		begin = offset + m.length

		if (a) {
			var timeFlags = timeSplitter(a)
			for (var i in timeFlags) {
                array[index] = timeFlags[i]
                ++index
			}
			--index
			braces = true
		} else if (b) {
			array[index] = b
			braces = false
		} else if (c || d) {
			if(braces ) {
				var rep
				if(c) {
				    rep = getRepetitions(c)
				} else {
					rep = d === '+' ? [1, NaN] : [0, NaN]
				}

				if(typeof rep !== 'string') {
					--index
					var n = array[index][1]
					array[index][1] = rep[0] + n - 1
					array[index][2] = rep[1] + n - 1
				} else {
					array[index] = c
				}
			} else {
				array[index] = c
			}
			braces = false
		}
		++index
	})
	return array
}

function getRepetitions(rep) {
    var nums = rep.split(',')
    if (nums.length !== 2)
    	return rep
    else {
    	var values = []
    	for (var i in nums) {
    		values[i] = nums[i].trim()
    		nums[i] = parseInt(values[i])
    	}
    	if( isNaN(nums[0]) || values[0] != nums[0]) {
    		return rep
    	} else if(!isNaN(nums[1]) && values[1] != nums[1]) {
    	    return rep
    	}
    }
    return nums
}
/*
function timeNormalizer(element) {
	var elem = [element[0]]
	if (elem[2]) {
        if()
	}
}*/

function builder(arrayParsed) {
	var isString = false
	var array = []
	var index = 0
	for (var i in arrayParsed) {
		if(typeof arrayParsed[i] === 'string') {
            array[index] += arrayParsed[i]
		} else {
			var value = timeNormalizer(arrayParsed[i])
		}
		++index
	}

	return array
}

var list = []
var str = 'kjldshfb kgbsssk{sk}lhhMsss{34  , 45}ah[wrtw]hdMM{2,}.h.*hdhdbhfYYYYbewrugfb'


console.log(str)
var x = parser(str)
console.log(x)
/*console.log('--------------------------------')
console.log(builder(x))*/
//console.log(getRepetitions('234 , 4 '))
//console.log(timeSplitter('hhdddyyyyd'))