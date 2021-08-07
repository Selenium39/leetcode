// 合并两个有序数组
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnumcr/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function (nums1, m, nums2, n) {
    console.log(nums1.length)
    for (; m < m + n; m++) {
        nums1[m] = nums2[--n]
    }
    nums1.sort((a, b) => a - b)
};