// 位1的个数
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn1m0i/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let count =0
    while(n!=0){
        if(n&1===1) count++
        n=n>>>1
    }
    return count
};