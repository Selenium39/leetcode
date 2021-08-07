// 回文链表
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnv1oc/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function (head) {
    const stack = []
    let oriHead =head
    while (head) {
        stack.push(head)
        head=head.next
    }
    while (oriHead) {
        if (oriHead.val !== stack.pop().val) {
            return false
        }
        oriHead=oriHead.next
    }
    return true
};