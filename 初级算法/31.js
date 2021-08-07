// 将有序数组转换为二叉搜索树
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xninbt/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function (nums) {
    if (nums.length === 0) {
        return null
    }
    return sortedArrayToBSTHelper(nums, 0, nums.length - 1)
};

function sortedArrayToBSTHelper(nums, start, end) {
    if (start > end) return null
    let midValue = (start + end) >> 1
    let root = new TreeNode()
    root.val = nums[midValue]
    root.left = sortedArrayToBSTHelper(nums, start, midValue - 1)
    root.right = sortedArrayToBSTHelper(nums, midValue + 1, end)
    return root
}