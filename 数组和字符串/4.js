// 旋转矩阵
// https://leetcode-cn.com/leetbook/read/array-and-string/clpgd/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  const len = matrix.length
  for (let i = 0; i < Math.floor(len / 2); i++) {
    const temp = matrix[i]
    matrix[i] = matrix[len - 1 - i]
    matrix[len - 1 - i] = temp
  }
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
}
