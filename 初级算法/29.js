// 对称二叉树
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn7ihv/

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
 * @return {boolean}
 */
 var isSymmetric = function (root) {
    if (!root) return true
    return isSymmetricHelper(root.left, root.right)
};

function isSymmetricHelper(left, right) {
    if (!left && !right) return true
    if (!left || !right || left.val !== right.val) return false
    return isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left)
}