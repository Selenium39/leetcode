// 3的幂
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnsdi2/

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function (n) {
    if(n<=0) return false
    return isPowerOfThreeHelper(n)
};

function isPowerOfThreeHelper(n){
    if (n % 3 === 0) {
        return isPowerOfThreeHelper(n / 3)
    }
    return n === 1 ? true : false
}