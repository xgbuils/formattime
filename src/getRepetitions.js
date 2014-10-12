function getRepetitions(rep) {
    if        (rep === '+') {
        return [1, NaN]
    } else if (rep === '*') {
        return [0, NaN]
    }

    var nums = rep.split(',')
    if (nums.length > 2)
        return '{' + rep + '}'
    else {
        var values = []
        for (var i in nums) {
            values[i] = nums[i].trim()
            nums[i] = parseInt(values[i])
        }
        if( isNaN(nums[0]) || values[0] != nums[0]) {
            return '{' + rep + '}'
        } else if(nums[1] === undefined) {
            return [nums[0], nums[0]]
        } else if(!isNaN(nums[1]) && values[1] != nums[1]) {
            return '{' + rep + '}'
        } else if(isNaN(nums[1])) {
            nums.pop()
        }
    }
    return nums
}

module.exports = getRepetitions