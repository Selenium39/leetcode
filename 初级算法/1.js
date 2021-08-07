// 删除排序数组中的重复项
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2gy9m/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function (nums) {
    let i = 0
    for (let j = 1; j < nums.length; j++) {
       if(nums[i]===nums[j]){
           continue
       }else{
           i++
           nums[i]=nums[j]
       }
    }
    return nums.length===0?0:i+1
}