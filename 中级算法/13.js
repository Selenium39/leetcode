// 填充每个节点的下一个右侧节点指针
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvijdh/

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    bfs(root)
    return root
};

function bfs(root) {
    if (!root) return
    const queue = [root]
    while (queue.length !== 0) {
        const len = queue.length
        let node = null
        for (let i = 0; i < len; i++) {
            node = queue.shift()
            if (queue.length !== 0) {
                node.next = queue[0]
            }
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        node.next = null
    }
}