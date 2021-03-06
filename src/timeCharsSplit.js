function timeCharsSplit(str, conversor) {
    var n = str.length
      , init = true
      , ch
      , count = 0
      , array = []
      , i = 0
      , text = ''
    while (i <= n) {
        if (init) {
            ch = str[i]
            count = 1
            init = false
            i++
        } else {
            if (ch === str[i]) {
                count++
                i++
            } else {
                array.push([conversor[ch], count, count])
                ch = undefined
                init = true
            }
        }
    }

    return array
}

module.exports = timeCharsSplit