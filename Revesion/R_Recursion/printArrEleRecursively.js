// Print all elements of array using Recursion 


let arr = [1,2,4,3,5,9]
function Print(arr,i=0,n=arr.length){
    if(i===n) return
    console.log(arr[i])
    return Print(arr,i+1,n)
}
(Print(arr))