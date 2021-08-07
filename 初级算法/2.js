// 买卖股票的最佳时机 II
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2zsx1/

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices) {
    let profile = 0
    for (let i = 0; i < prices.length - 1; i++) {
        profile += Math.max(prices[i + 1] - prices[i], 0)
    }
    return profile
};