// 搜索插入位置
// https://leetcode-cn.com/leetbook/read/array-and-string/cxqdh/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = Math.ceil((left + right) / 2)
    const midVal = nums[mid]
    if (midVal > target) {
      right = mid - 1
    }
    if (midVal < target) {
      left = mid + 1
    }
    if (midVal === target) return mid
  }
  return left
}
