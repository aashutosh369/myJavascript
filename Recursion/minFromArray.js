// Find smallest from the given array 

let arr = [501, 322, 2234, 338, 902, 804, 849, 646, 3433]

function smallest(arr, i = 0, min = Infinity) {
    if(i === arr.length){
        return min; 
    }
    if(arr[i] < min) min = arr[i]
    return smallest(arr, i+1, min)
}
console.log(smallest(arr))