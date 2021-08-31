// 相交链表
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xv02ut/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null
    let node1 = headA
    let node2 = headB
    while (node1 !== node2) {
        node1 = node1 ? node1.next : headB
        node2 = node2 ? node2.next : headA
    }
    return node1
};