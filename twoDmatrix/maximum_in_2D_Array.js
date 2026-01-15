// Maximum in 2D array
// Write a JavaScript program to find the maximum element in a 2D array of integers.

// Input Format
// A 2D array of integers.

// Output Format
// The maximum element in the array.

// Example 1
// Input

// [
// [3, 7, 5],
// [2, 8, 4],
// [1, 6, 9]
// ]
// output

// 9

let matrix = [
  [3, 7, 5],
  [2, 8, 4],
  [1, 6, 9],
];

function maximum_in_2D_Array(matrix) {
  let max = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (max < matrix[i][j]) {
        max = matrix[i][j];
      }
    }
  }
  return max;
}

console.log(maximum_in_2D_Array(matrix));
