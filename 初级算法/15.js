// 有效的字母异位词
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn96us/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function (s, t) {
    if (s.length !== t.length) { return false }
    return JSON.stringify(s.split('').sort()) === JSON.stringify(t.split('').sort())
};