// 最长回文子串
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvn3ke/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const len = s.length
    const dp = s.split('')
    let start = 0
    let maxLen = 1
    for (let i = 0; i < len; i++) {
        dp[i] = new Array(len)
        dp[i][i] = 1
    }
    for (let L = 2; L <= len; L++) {
        for (let i = 0; i <len; i++) {
            let j = L + i - 1
            if (j >= s.len) break;
            if (s[i] !== s[j]) {
                dp[i][j] = 0
            } else {
                if (j - i < 3) {
                    dp[i][j] = 1
                } else {
                    dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j]
                }
            }
            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1
                start = i
            }
        }
    }
    return s.slice(start, start + maxLen)
};