// 旋转图像
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnhhkv/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function (matrix) {
    let len = matrix.length
    for (let i = 0; i < len / 2; i++) {
      for (let j = i; j < len - 1 - i; j++) {
        let m = len - 1 - i
        let n = len - 1 - j
        let temp = matrix[i][j]
        matrix[i][j] = matrix[n][i]
        matrix[n][i] = matrix[m][n]
        matrix[m][n] = matrix[j][m]
        matrix[j][m] = temp
      }
    }
  };