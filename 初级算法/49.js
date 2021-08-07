// 缺失数字
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnj4mt/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    for (let i = nums.length; i >= 0; i--) {
        if (!nums.includes(i)) return i
    }
};
