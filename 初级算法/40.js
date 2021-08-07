// Fizz Buzz
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xngt85/

/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function (n) {
    const result = []
    while (n > 0) {
        if (n % 3 === 0 && n % 5 === 0) {
            result.unshift('FizzBuzz')
        } else if (n % 3 === 0) {
            result.unshift('Fizz')
        } else if (n % 5 === 0) {
            result.unshift('Buzz')
        }else{
            result.unshift(String(n))
        }
        --n
    }
    return result
};