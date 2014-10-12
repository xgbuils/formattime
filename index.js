var FormatTimeFactory = require('./src/FormatTimeFactory')

var conversor1 = {
    D: 'Date',
    d: 'WordDay',
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

var FormatTime = FormatTimeFactory(conversor1, {
	getWordDay: function() {
	    return [
	        'Sunday',
	        'Monday',
	        'Tuesday',
	        'Wednesday',
	        'Thursday',
	        'Friday',
	        'Saturday'
	        ][this.getDay()]
	}
})

var ft = new FormatTime()

var str = ft.format('DD-MM-YY d*', new Date())
console.log(str)