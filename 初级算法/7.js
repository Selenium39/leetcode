// 加一
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2cv1c/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function (digits) {
    let result = []
    let needCarry = true
    for (let i = digits.length - 1; i >= 0; i--) {
        if (needCarry) {
            let temp = digits[i] + 1
            result.unshift(temp % 10)
            needCarry = temp >= 10 ? true : false
            if (i === 0 && needCarry) {
                result.unshift(1)
            }
        } else {
            result.unshift(digits[i])
        }
    }
    return result
};