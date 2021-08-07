// 最长公共前缀
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnmav1/

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function (strs) {
    let lenArr = strs.map(str => str.length)
    let minStr = strs[lenArr.findIndex(item => item === Math.min(...lenArr))]
    for (let i = 0; i < minStr.length; i++) {
        if (strs.filter(str => str.startsWith(minStr.slice(0, i+1))).length !== strs.length) {
            return minStr.slice(0, i)
        }
        else if (minStr.length === 1 || minStr.length === i + 1) {
            return minStr
        }
    }
    return strs.length === 1 ? strs[0] : ''
};