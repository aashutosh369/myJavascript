// Find largest from the given array 

let arr = [501, 322, 2234, 338, 902, 804, 849, 646, 3433]

function largest(arr, i=0, max = -Infinity){
    if(i===arr.length) return max
    if(arr[i] > max) max = arr[i]
    return largest(arr, i+1, max)
}
console.log(largest(arr))
