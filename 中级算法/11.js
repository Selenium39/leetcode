// 二叉树的锯齿形层次遍历
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvle7s/

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
var zigzagLevelOrder = function (root) {
    const queue = []
    const count = 0
    bfs(queue, root, count)
    return queue
};

function bfs(queue, root, count) {
    if (!root) return
    if (!queue[count]) queue[count] = []
    if (count % 2 === 0) {
        queue[count].push(root.val)
    } else {
        queue[count].unshift(root.val)
    }
    bfs(queue, root.left, count + 1)
    bfs(queue, root.right, count + 1)
}
