// 字母异位词分组
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvaszc/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map()
    strs.forEach(item => {
        str = item.split('').sort().join('')
        map.has(str) ? map.get(str).push(item) : map.set(str, [item])
    })
    return [...map.values()]
};