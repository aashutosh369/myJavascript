function traverseArray(arr,i=0){
    if(i>= arr.length) return
    console.log(arr[i])
    traverseArray(arr,i+1)
}
let array = [1,2,3,4,5]
traverseArray(array)