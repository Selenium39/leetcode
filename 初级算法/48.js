// 有效的括号
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnbcaj/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {
    const stack = []
    const chars = new Map()
        .set(')', '(')
        .set(']', '[')
        .set('}', '{')
    for (let i = 0; i < s.length; i++) stack.length === 0 ? (chars.has(s[i]) ? (stack.length = 1, i = s.length) : stack.push(s[i])) : (chars.get(s[i]) === stack[stack.length - 1] ? stack.pop() : stack.push(s[i]))
    return stack.length === 0 ? true : false
};