// 删除链表中的节点
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnarn7/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function (node) {
    var nextNode = node.next;
    node.val = nextNode.val;
    node.next = nextNode.next;
};