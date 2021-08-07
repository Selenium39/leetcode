// 二叉树的层序遍历
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnldjj/

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
 * @return {number[][]}
 */
 var levelOrder = function (root) {
    let result = []
    var dfs = (root, level) => {
        if (!root) return
        result[level] ? result[level].push(root.val) : (result[level] = [root.val])
        dfs(root.left, level + 1)
        dfs(root.right, level + 1)
    }
    dfs(root, 0)
    return result
};