var parser = require('./parser')

function FormatTimeFactory(conversor, functions) {
    function FormatTime() {}
    function Statement() {}
    functions = functions || {}

    FormatTime.prototype.prepare = function (format) {
        var stmt = new Statement()
        stmt.parsed = parser(format, conversor)
        return stmt
    }

    Statement.prototype.toString = function (time, ch) {
    	if (ch === undefined) 
    		ch = '0'

        return this.parsed.map(function (elem) {
        	if (typeof elem === 'string') {
        		return elem
        	} else {
                var flag = typeof elem[0] === 'object'
                var getterName = 'get' + (flag ? elem[0].name : elem[0])
                var getter = functions[getterName] || Date.prototype[getterName]

                var strtime = getter.call(time)
                if (flag && elem[0].incr) 
                	strtime += elem[0].incr
                strtime = strtime.toString()
                var length = strtime.length
                if (elem[2])
                	strtime = strtime.substring(length - elem[2])

                var result = ''
                for (var i = length; i < elem[1]; ++i) {
                	result += ch
                }
                result += strtime

                return result
        	}
        })
        .join('')
    }

    Statement.prototype.toTime = function(string) {
    	return new Date()
    }

    FormatTime.prototype.format = function (format, time) {
        stmt = this.prepare(format)
        return stmt.toString(time)
    }

	return FormatTime
}

var conversor1 = {
    D: 'Date',
    M: {
        name: 'Month',
        incr: 1,
    },
    Y: 'FullYear',
    H: 'Hours',
    h: 'Hours',
    m: 'Minutes',
    s: 'Seconds',
}

var FormatTime = FormatTimeFactory(conversor1)

var ft = new FormatTime()

var str = ft.format('DD-MM-YY', new Date())
console.log(str)
