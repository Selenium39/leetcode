// 杨辉三角
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xncfnv/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function (numRows) {
    const result =[]
    for (let i = 0; i <numRows; i++) {
        result[i] = []
        for (let j = 0; j < i+1; j++) {
            if (j === 0 || j === i) {
                result[i][j] = 1
            } else {
                result[i][j] = result[i - 1][j - 1] + result[i - 1][j]
            }
        }
    }
    return result
};