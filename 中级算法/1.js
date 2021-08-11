// 三数之和
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvpj16/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = []
    const sums = []
    const length = nums.length
    for (let i = 0; i < length; i++) {
        const sum = nums.shift()
        if (sums.includes(sum)) continue
        sums.push(sum)
        result.push(twoSum(nums, -sum))
    }
    result = [...new Set(result.flat().map(arr => arr.sort((a, b) => a - b).toString()))].map(arr => arr.split(','))
    return result
};

var twoSum = function (nums, sum) {
    const result = []
    const map = new Map()
    nums.forEach(num => map.has(num) ? result.push([num, map.get(num), -sum]) : map.set(sum - num, num))
    return result
}
