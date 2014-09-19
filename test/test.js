var extend = require('../vendor/extend')

var tests = [
    require('./timeCharsSplit'),
    require('./getRepetitions'),
]

module.exports = extend.apply(null, tests)