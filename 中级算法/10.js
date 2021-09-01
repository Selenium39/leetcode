// 二叉树的中序遍历
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xv7pir/

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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const number = []
    inorderTraversalHelper(root, number)
    return number
};

function inorderTraversalHelper(node, number) {
    if (!node) return
    inorderTraversalHelper(node.left, number)
    number.push(node.val)
    inorderTraversalHelper(node.right, number)
}