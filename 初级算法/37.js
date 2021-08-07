// 打家劫舍
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnq4km/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function (nums) {
    if(nums.length===0) return 0
    let dp = []
    for (let i = 0; i < nums.length; i++) dp[i] = []
    dp[0][0] = 0
    dp[0][1] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0],dp[i - 1][1])
        dp[i][1] = dp[i - 1][0] + nums[i]
    }
    return Math.max(dp[nums.length-1][0],dp[nums.length-1][1])
};