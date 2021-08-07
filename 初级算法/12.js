// 反转字符串
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnhbqj/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function (s) {
    let left = 0
    let right = s.length - 1
    while (left < right) {
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
        ++left
        --right
    }
    console.log(s)
};