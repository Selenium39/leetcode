// 括号生成
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xv33m7/

/**
 * @param {number} n
 * @return {string[]}
 */


var generateParenthesis = function (n) {
    const res = []
    dfs('', n, n,res)
    return res
};

function dfs(str, leftCount, rightCount,res) {
    if (leftCount === 0 && rightCount === 0) res.push(str)
    if (leftCount > 0) dfs(str + '(', leftCount - 1, rightCount,res)
    if (leftCount < rightCount) dfs(str + ')', leftCount, rightCount - 1,res)
}
