// 字符串转换整数 (atoi)
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnoilh/

/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function (s) {
    let result = 0
    s = s.trim()
    if (isNaN(Number(s[0])) && s[0] !== '-' && s[0] !== '+') return result
    let symbol = s[0] === '-' ? -1 : 1
    if (s[0]==='-'||s[0]==='+') {
        s = s.slice(1, s.length)
    }
    for (let i = 0; i < s.length; i++) {
        if (isNaN(Number(s[i]))||s[i]===' ') {
            s = s.slice(0, i)
        }
    }
    result = Number(s) * symbol
    if (result < -Math.pow(2, 31)) {
        result = -Math.pow(2, 31)
    } else if (result > Math.pow(2, 31) - 1) {
        result = Math.pow(2, 31)-1
    }
    return result
};