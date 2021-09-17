// 二叉搜索树中第K小的元素
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvuyv3/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    const queue = []
    midOrder(root, queue)
    return queue[k - 1]
};

function midOrder(root, queue) {
    if (!root) return
    midOrder(root.left, queue)
    queue.push(root.val)
    midOrder(root.right, queue)
}