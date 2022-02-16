// 寻找数组的中心索引
// https://leetcode-cn.com/leetbook/read/array-and-string/yf47s/

/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
  const sum = nums.reduce((pre, next) => pre + next, 0)
  let left = 0
  let right = sum
  for (let i = 0; i < nums.length; i++) {
    left += nums[i - 1] || 0
    right -= nums[i]
    if (left === right) return i
  }
  return -1
}
