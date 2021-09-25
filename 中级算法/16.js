// 电话号码的字母组合
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xv8ka1/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const map = new Map()
    map.set('', [])
    map.set('2', ['a', 'b', 'c'])
    map.set('3', ['d', 'e', 'f'])
    map.set('4', ['g', 'h', 'i'])
    map.set('5', ['j', 'k', 'l'])
    map.set('6', ['m', 'n', 'o'])
    map.set('7', ['p', 'q', 'r', 's'])
    map.set('8', ['t', 'u', 'v'])
    map.set('9', ['w', 'x', 'y', 'z'])
    if (digits.length <= 1) return map.get(digits)
    const digitArray = []
    digits.split('').forEach(digit => digitArray.push(map.get(digit)))
    const arr = digitArray.shift()
    return digitArray.reduce((total, val) => {
        return combinTwoArr(total, val)
    }, arr)

};

function combinTwoArr(arr1, arr2) {
    const result = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push(arr1[i] + arr2[j])
        }
    }
    return result
}
