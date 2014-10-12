/*var timeCharsSplit = require('./timeCharsSplit')
var getRepetitions = require('./getRepetitions')
var parser = require('./parser')

//var y = /([DMYHhms]+)|(\[[^\]]*\])|(\{[^\[\}]+\})|([^DMYHhms]+)/g




function fillNumber(num, m, n, ch) {
    ch = ch || ' '
    var numstr = num.toString()
    var length = numstr.length
    var result = ''
    if (n !== undefined && length > n) {
        result = numstr.substring(0, n)
    } else {
        for (var i = length; i < m; i++) {
            result += ch
        }
        result += numstr
    }

    return result
}

function FormatTime(format, config) {
    this.format = parser(format)
    this.config = config
}

FormatTime.prototype.get = function (value) {
    if (typeof value === 'string') {
        var obj = {}
        var array = []
        var source = '^'
        for (var i in this.format) {
            var format = this.format[i]
            if (typeof format === 'string') {
                source += format
            } else {
                source += '(\\d{' + format[1] + ',' + (format[2] ? format[2] : '') + '})'
                if (!obj[format[0]] || obj[format[0]].length < format[2] ) {
                    format[3] = true
                }
                array.push(format)
            }
        }
        source += '$'
        console.log(source)
        var re = new RegExp(source)
        console.log(re)
        var arr = value.match(re)
        console.log(arr)
        var now  = new Date()
          , date = new Date(now)

        if (arr) {
            arr = arr.slice(1)
            for (var i in array) {
                if(array[i][3]) {
                    console.log('correction')
                    var correction = now['get' + array[i][0].name]() - date['get' + array[i][0].name]()
                    if(array[i][0].correction) {
                        correction += array[i][0].correction
                    }
                    var timeSlice = arr[i] - correction

                    console.log(array[i][0])
                    console.log(timeSlice)
                    date['set' + array[i][0].name](timeSlice)
                }
            }
        }
        console.log(date)
    } else if (value instanceof Date) {

    } else {
        return value
    }
}

var ft = new FormatTime('DD-MM-YYYY')
console.log(ft.format)
ft.get('23-13-2112')*/

/*var list = []
var str = 'kjldshfb kgbsssk{sk}lhhMsss{34  , 45}ah[wrtw]hdMM{2,}.h.*hdhdbhfYYYYbewrugfb'

console.log(str)
var x = parser(str)
console.log(x)*/
/*console.log('--------------------------------')
console.log(builder(x))*/
//console.log(getRepetitions('234 , 4 '))
//console.log(timeSplitter('hhdddyyyyd'))