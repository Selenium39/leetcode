// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvvuqg/
// 递增的三元子序列

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var increasingTriplet = function (nums) {
    let [first, second] = new Array(2).fill(Number.MAX_SAFE_INTEGER)
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (num <= first) first = num
        else if (num <= second) second = num
        else return true
    }
    return false
};