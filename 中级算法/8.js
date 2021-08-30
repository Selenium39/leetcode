// 奇偶链表
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvdwtj/

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
var oddEvenList = function (head) {
    if(!head||!head.next||!head.next.next) return head
    let odd = head
    let even = head.next
    let evenHead = even
    let currentNode = even.next
    let isOdd = true
    while (currentNode) {
       if(isOdd){
           odd.next=currentNode
           odd=currentNode
       }else{
           even.next=currentNode
           even=currentNode
       }
       isOdd=!isOdd
       currentNode=currentNode.next
    }
    if(!isOdd) even.next=null
    odd.next=evenHead
    return head
};