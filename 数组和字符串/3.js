// 合并区间
// https://leetcode-cn.com/leetbook/read/array-and-string/c5tv3/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  intervals.sort((a, b) => { return a[0] - b[0] })
  const stack = [intervals.shift()]
  for (const [left, right] of intervals) {
    const top = stack[stack.length - 1]
    const [left1, right1] = top
    if (left > right1) {
      stack.push([left, right])
    } else {
      top[0] = Math.min(left, left1)
      top[1] = Math.max(right, right1)
    }
  }
  return stack
}
