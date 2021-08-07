// 打乱数组
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn6gq1/

/**
 * @param {number[]} nums
 */
 var Solution = function (nums) {
    this.oldArr = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
   return this.oldArr
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
   const newArr= [...this.oldArr]
   for(let i=0;i<newArr.length;i++){
     const random =Math.floor(Math.random()*(newArr.length-i))
     let temp = newArr[newArr.length-i-1]
     newArr[newArr.length-i-1]=newArr[random]
     newArr[random]=temp
   }
   return newArr
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */