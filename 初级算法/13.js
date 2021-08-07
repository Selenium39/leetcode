// 整数反转
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnx13t/

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function (x) {
    let result = parseInt(x.toString().split('').reverse().join(''), 10)
    result = x > 0 ? result : -result
    return (isNaN(result) || result < (-Math.pow(2, 31)) || result > ((Math.pow(2, 31) - 1))) ? 0 : result
};