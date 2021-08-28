// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvw73v/
// 两数相加

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let temp = 0
    let res = null
    let tail = null
    while (l1 || l2) {
        const node = new ListNode(0, null)
        const num1 = l1 ? l1.val : 0
        const num2 = l2 ? l2.val : 0
        const sum = temp + num1 + num2
        node.val = sum % 10
        temp = Math.floor(sum / 10)
        res ? (tail.next = node, tail = node) : res = tail = node
        l1 ? l1 = l1.next : null
        l2 ? l2 = l2.next : null
    }
    if (temp) tail.next = new ListNode(1, null)
    return res
};