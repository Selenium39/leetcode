// 矩阵置零
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvmy42/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const rows = []
    const cols = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rows.push(i)
                cols.push(j)
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        if (rows.includes(i)) {
            matrix[i] = new Array(matrix[0].length).fill(0)
        } else {
            for (let j = 0; j < matrix[0].length; j++) {
                if (cols.includes(j)) {
                    matrix[i][j] = 0
                }
            }
        }
    }
};
