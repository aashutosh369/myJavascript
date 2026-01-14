// Merge Two Sorted Arrays
// Difficulty: Medium
// Topics: Arrays, loops, logic

// const e = require("express");

// Merge two sorted arrays into one sorted array (without using sort method).

// Test Cases:
// Array 1	    Array 2	    Output
// [1,3,5]	    [2,4,6]	    [1,2,3,4,5,6]
// [1,2,3]	    [4,5,6]	    [1,2,3,4,5,6]
// [5,10,15]	[3,8,12]	[3,5,8,10,12,15]
// Hint: Use two pointers, compare elements, add smaller one first.

function mergeTwoShortedArray(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  console.log(result);
}

mergeTwoShortedArray([1, 3, 5], [2, 4, 6]);
mergeTwoShortedArray([1, 2, 3], [4, 5, 6]);
mergeTwoShortedArray([5, 10, 15], [3, 8, 12]);
