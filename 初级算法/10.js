// 有效的数独
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2f9gg/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function (board) {
    const rows = new Array()
    const cols = new Array()
    const cells = new Array()
    for (let i = 0; i < board.length; i++) {
        rows[i] = []
        for (let j = 0; j < board[0].length; j++) {
            let value = board[i][j]
            if (value === '.') continue
            let block = Math.floor(i / 3) * 3 + Math.floor(j / 3)
            if (!cols[j]) cols[j] = []
            if (!cells[block]) cells[block] = []
            if (rows[i].includes(value) || cols[j].includes(value) || cells[block].includes(value)) return false
            rows[i].push(value)
            cols[j].push(value)
            cells[block].push(value)
        }
    }
    return true
};