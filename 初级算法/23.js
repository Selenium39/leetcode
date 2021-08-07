// 反转链表
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnnhm6/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function (head) {
    let pre = null
    let post = null
    while (head) {
        post = head.next
        head.next = pre
        pre = head
        head = post
    }
    return pre
};