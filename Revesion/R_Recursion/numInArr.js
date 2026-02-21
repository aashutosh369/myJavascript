// Find a number is exist in the given array or not ?

function findNum(arr,x,i=0,n = arr.length){
    if(i===n) return false
    return (arr[i]==x) ? true : findNum(arr,x,i+1,n)
}
let arr = [1,2,6,8,9]
console.log(findNum(arr,1))
console.log(findNum(arr,20)) 