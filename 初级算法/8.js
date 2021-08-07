// 移动零
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2ba4i/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function (nums) {
    let len=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            let temp = nums[i]
            nums[i]= nums[len]
            nums[len] = temp
            len++
        }
    }
};