var extend = require('../vendor/extend')

var tests = [
    require('./timeCharsSplit'),
    require('./getRepetitions'),
    require('./parser'),
]

module.exports = extend.apply(null, tests)