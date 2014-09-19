var timeCharsSplit = require('./timeCharsSplit')
var getRepetitions = require('./getRepetitions')

//var y = /([DMYHhms]+)|(\[[^\]]*\])|(\{[^\[\}]+\})|([^DMYHhms]+)/g
var REGEXP = /([DMYHhms]+)|\[([^\]]+)\]|\{([\d,\s]+)|([+*])\}/g

function parser (str) {
    var array = []
      , index = 0
      , begin = 0
      , braces = false
    str.replace(REGEXP, function(m, a, b, c, d, offset) {
    	var match
        if(begin !== offset) {
            array[index] = str.substring(begin, offset)
            braces = false
            ++index
        }
        begin = offset + m.length

        if (a) {
            var timeFlags = timeCharsSplit(a)
            for (var i in timeFlags) {
                array[index] = timeFlags[i]
                ++index
            }
            --index
            braces = true
        } else if (b) {
            array[index] = b
            braces = false
        } else if (match = (c || d)) {
            if(braces ) {
                var rep = getRepetitions(match)

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

var list = []
var str = 'kjldshfb kgbsssk{sk}lhhMsss{34  , 45}ah[wrtw]hdMM{2,}.h.*hdhdbhfYYYYbewrugfb'

console.log(str)
var x = parser(str)
console.log(x)
/*console.log('--------------------------------')
console.log(builder(x))*/
//console.log(getRepetitions('234 , 4 '))
//console.log(timeSplitter('hhdddyyyyd'))