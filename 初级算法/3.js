// 旋转数组
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2skh7/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function (nums, k) {
    k = k % nums.length
    nums.reverse()
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)

};

function reverse(nums, start, end) {
    while (start < end) {
        let temp
        temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        ++start
        --end
    }
}