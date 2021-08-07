// 外观数列
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnpvdm/

/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function (n) {
    if (n === 1) return '1'
    return description(countAndSay(n-1))

};

function description(str) {
    let result = ''
    let count = 1
    for (let i = 0; i <str.length; i++) {
        let number =str[i]
        if (str[i] === str[i + 1]) {
            count++
        }else{
            result += count.toString() + number
            count=1
        }
    }
    return result
}