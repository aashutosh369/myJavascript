// Array Chunk
// Difficulty: Medium
// Topics: Arrays, loops

// Split an array into chunks of specified size.

// Test Cases:
// Input	        Size	  Output
// [1,2,3,4,5,6,7]	3	  [[1,2,3], [4,5,6], [7]]
// [1,2,3,4,5]	    2	  [[1,2], [3,4], [5]]
// [1,2,3]	        5	  [[1,2,3]]

function arrayChunk(arr,n){
    let arr2 = []
    let resultantArray = []
    for(let i=0; i<arr.length; i++){
        if(arr2.length < n){
            arr2.push(arr[i])
        }
        if(arr2.length === n){
            resultantArray.push(arr2)
            arr2 = []
        }
    }
    if(arr2.length > 0) resultantArray.push(arr2)
    return resultantArray
}

console.log(arrayChunk([1,2,3,4,5,6,7],3))
console.log(arrayChunk([1,2,3,4,5],2))
console.log(arrayChunk([1,2,3],5))