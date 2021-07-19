// https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
let arr = []
var topK = function(nums, k) {
    arr = nums
    k = nums.length - k
    return quickSort(0, nums.length - 1, k)
};

function quickSort(l, r, k){
    if(l >= r) return arr[k]
    let p = arr[l], i = l - 1, j = r + 1
    while(i < j){
        while(arr[++i] < p);
        while(arr[--j] > p);
        if(i < j){
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    if(j < k) quickSort(j + 1, r, k)
    else quickSort(l, j, k)
    return arr[k]
}

let arr2 = [3,2,1,5,6,4]
let k = topK(arr2, 2)
console.log(k)