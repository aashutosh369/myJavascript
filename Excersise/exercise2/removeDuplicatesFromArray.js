// Remove Duplicates from Array
// Difficulty: Easy
// Topics: Arrays, loops, conditionals

// Given an array, return a new array with duplicate values removed.

// Test Cases:
// Input	                Output
// [1, 2, 2, 3, 4, 4, 5]	[1, 2, 3, 4, 5]
// [5, 5, 5, 5]	            [5]
// [1, 2, 3]	            [1, 2, 3]
// []	                    []
// Hint: Use a new array and check if element already exists before adding.

let arr = [1,2,2,3,4,4,5]
// let arr = [5,5,5,5]
// let arr = [1,2,3]
// let arr = []
let arr1 = []
for(let e of arr){
    if(arr1.indexOf(e) === -1){ // -1  -> means element is not present in the array 
        arr1.push(e)
    }
}
console.log(arr1)