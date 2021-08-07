// 罗马数字转整数
// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn4n7c/

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function (s) {
    let result = 0
    const romanMap = new Map()
    romanMap.set('I', 1)
    romanMap.set('V', 5)
    romanMap.set('X', 10)
    romanMap.set('L', 50)
    romanMap.set('C', 100)
    romanMap.set('D', 500)
    romanMap.set('M', 1000)
    romanMap.set('IV', 4)
    romanMap.set('IX', 9)
    romanMap.set('XL', 40)
    romanMap.set('XC', 90)
    romanMap.set('CD', 400)
    romanMap.set('CM', 900)
    const arr = Array.from(s)
    for(let i=0;i<arr.length;){
        if(romanMap.has(arr[i]+arr[i+1])){
            result+=romanMap.get(arr[i]+arr[i+1])
            i+=2
        }else{
            result+=romanMap.get(arr[i])
            i++
        }
    }
    return result
};