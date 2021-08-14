// 无重复字符的最长子串
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xv2kgi/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function (s) {
    let maxSize = 0
    const strs = []
    for (let i = 0; i < s.length; i++) {
        if (strs.includes(s[i])) {
            strs.push(s[i])
            strs.splice(0, strs.findIndex(item => item === s[i]) + 1)
            maxSize = Math.max(maxSize, strs.length)
        } else {
            strs.push(s[i])
            maxSize = Math.max(maxSize, strs.length)
        }
    }
    return maxSize
};