// 从前序与中序遍历序列构造二叉树
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvix0d/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder.length) return null
    const val = preorder[0]
    const root = new TreeNode(val)
    const index = inorder.indexOf(val)
    root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
    root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1))
    return root
};