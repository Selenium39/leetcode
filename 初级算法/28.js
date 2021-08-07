// 验证二叉搜索树
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn08xg/

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
 var isValidBST = function (root) {
    return isValidBST1(root, -Infinity,Infinity)
};

function isValidBST1(root, min, max) {
    if (!root) return true
    if (root.val >= max || root.val <= min) return false
    return isValidBST1(root.left, min, root.val) && isValidBST1(root.right, root.val, max)
}