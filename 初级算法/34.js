// 爬楼梯
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn854d/


/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function (n) {
    if (n <= 1) return 1
    const dp = []
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};