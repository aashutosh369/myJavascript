// Max Hourglass Sum
// You want to implement a function that takes a two-dimensional array of integers and returns the maximum sum of any hourglass shape in the array. An hourglass shape is defined as follows:

// a b c
//   d
// e f g
// Input Format
// A two-dimensional array of integers arr such that 3 <= arr.length, arr[i].length <= 100.

// Output Format
// An integer representing the maximum sum of any hourglass shape in arr.

// Example 1
// Input

//  [
//   [1, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0],
//   [0, 0, 2, 4, 4, 0],
//   [0, 0, 0, 2, 0, 0],
//   [0, 0, 1, 2, 4, 0]
//   ]

// output

// 19
// Explanation

// 2 4 4
// 0 2 0
// 1 2 4

// in this the hourglass sum will be 2 + 4 + 4 + 2 + 1 + 2 + 4 = 19

function maxHourGlassSum(matrix){
    let hourglassMaxSum = 0 ;
    for(let i = 1; i < matrix.length-1; i++){
        let hourglassSum = 0 ; 
        for(let j = 1; j < matrix[0].length-1; j++){
            hourglassSum = (matrix[i][j] + (matrix[i-1][j] + matrix[i-1][j-1] + matrix[i-1][j+1]) + (matrix[i+1][j] + matrix[i+1][j-1] + matrix[i+1][j+1]))

            if(hourglassMaxSum < hourglassSum) hourglassMaxSum = hourglassSum 
            
        }
    }
    return hourglassMaxSum
}

let arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

console.log(maxHourGlassSum(arr))
