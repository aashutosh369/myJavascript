// Find maximum element from the array

let arr =[10,9,8,13,12,15]
function maximum(arr,idx=0,n=arr.length){
    if(idx === n-1) return arr[idx]
    return Math.max(arr[idx],maximum(arr,idx+1,n))
}
console.log(maximum(arr))