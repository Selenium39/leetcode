// 最大子序和
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn3cg3/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function (nums) {
    let dp = []
    let max = dp[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], 0) + nums[i]
        max = max > dp[i] ? max : dp[i]
    }
    return max
};