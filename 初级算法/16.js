// 验证回文串
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xne8id/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    s= s.replace(/[^A-Za-z0-9]/g,'').toLocaleLowerCase()
    return s.split('').reverse().join('')===s
};