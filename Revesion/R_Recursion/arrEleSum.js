// Find the sum of elements of an array
function sum(arr, idx=0, n=arr.length){
    if(idx === n-1) return arr[idx]
    return arr[idx] + sum(arr, idx+1, n)
}
let arr = [10,13,2,5,7]
console.log(sum(arr))