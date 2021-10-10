// 全排列
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvqup5/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (nums.length === 1) return [nums]
    const res = []
    permuteHelper(nums, [], res);
    return res;
};

function permuteHelper(nums, arr, res) {
    if (nums.length === 0) return res.push(arr);
    for (let i = 0; i < nums.length; i++) {
        let temp = [...arr];
        let tempN = [...nums];
        temp.push(nums[i]);
        tempN.splice(i, 1);
        permuteHelper(tempN, temp, res);
    }
}