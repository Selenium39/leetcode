// 汉明距离
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnyode/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function (x, y) {
    return Array.from(String((x ^ y).toString(2))).filter(item => item === '1').length
};