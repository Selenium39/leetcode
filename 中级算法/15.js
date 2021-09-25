// 岛屿数量
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvtsnm/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++
                dfs(i, j, grid)
            }
        }
    }
    return count

};

function dfs(i, j, grid) {
    if (i >= 0 && i < grid.length && j >= 0 && j < grid[0].length && grid[i][j] === '1') {
        grid[i][j] = '0'
        dfs(i - 1, j, grid)
        dfs(i + 1, j, grid)
        dfs(i, j - 1, grid)
        dfs(i, j + 1, grid)
    }
}
