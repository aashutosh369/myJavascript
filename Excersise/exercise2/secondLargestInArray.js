// Find Second Largest Number
// Difficulty: Easy
// Topics: Arrays, loops, conditionals

// Find the second largest number in an array.

// Test Cases:
// Input	                 Output
// [10, 5, 20, 8, 15]	     15
// [1, 2, 3, 4, 5]	         4
// [100, 200]	             100
// [50, 50, 40]           	 40
// Hint: Find max, then find max excluding the first max.

let arr = [10, 5, 20, 8, 15];
arr.sort((a, b) => b - a);
console.log(arr[1]);
