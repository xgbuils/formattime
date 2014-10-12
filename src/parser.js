var timeCharsSplit = require('./timeCharsSplit')
var getRepetitions = require('./getRepetitions')

function parser (str, conversor) {
    var array = []
      , index = 0
      , begin = 0
      , braces = false

    var pattern = '(['
    for (var i in conversor) {
        pattern += i
    }
    pattern += ']+)|\\[([^\\]]+)\\]|\\{([\\d,\\s]+)\\}|([+*])'
    var regexp = new RegExp(pattern, 'g')


    str.replace(regexp, function(m, chars, escaped, c, d, offset) {
        var match
        if(begin !== offset) {
            array[index] = str.substring(begin, offset)
            braces = false
            index++
        }
        begin = offset + m.length
        if (chars) {
            var timeFlags = timeCharsSplit(chars, conversor)
            for (var i in timeFlags) {
                array[index] = timeFlags[i]
                array[index][2] = array[index][1]
                index++
            }
            index--
            braces = true
        } else if (escaped) {
            array[index] = escaped
            braces = false
        } else {
            match = (c || d)
            if (match) {
                if(braces ) {
                    var rep = getRepetitions(match)
    
                    if(typeof rep !== 'string') {
                        index--
                        array[index][1] += rep[0] - 1
                        if(rep[1])
                            array[index][2] += rep[1] - 1
                        else if(array[index].length === 3)
                            array[index].pop()
                    } else {
                        array[index] = rep
                    }
                } else {
                    array[index] = c ? '{' + c + '}' : d
                }
                braces = false
            }
        }
        index++
    })
    if(begin !== str.length) {
        array[index] = str.substring(begin)
    }
    return array
}

module.exports = parser