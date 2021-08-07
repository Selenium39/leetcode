// 存在重复元素
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x248f5/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function (nums) {
    return !(new Set(nums).size === nums.length)
};