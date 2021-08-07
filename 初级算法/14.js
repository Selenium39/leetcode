// 字符串中的第一个唯一字符
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn5z8r/

/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function (s) {
    for(let i=0;i<s.length;i++){
       if(s.indexOf(s[i])===s.lastIndexOf(s[i])) return i
    }
    return -1
};