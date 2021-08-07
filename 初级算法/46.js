// 颠倒二进制位
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnc5vg/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function (n) {
    let bit = n.toString(2)
    while (bit.length < 32) bit = '0' + bit
    bit = bit.split('').reverse().join('')
    return parseInt(bit, 2)
};