// 只出现一次的数字
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x21ib6/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let res=0
    nums.forEach(num=>res=res^num)
    return res
};