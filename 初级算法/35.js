// 买卖股票的最佳时机
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn8fsh/

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices) {
    let dp = []
    for (let i = 0; i < prices.length; i++) {
        dp[i] = []
    }
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
    }
    return dp[prices.length - 1][0]
};