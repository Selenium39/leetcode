// 实现 strStr()
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnr003/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function (haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0] && haystack.slice(i, i + needle.length) === needle) {
            return i
        }
    }
    return needle === '' ? 0 : -1
};