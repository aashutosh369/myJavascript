// Row with maximum 1's
// Given a boolean matrix of size N*M in which each row is sorted your task is to print the index of the row containing maximum 1's. If multiple answer exist print the smallest one.

// Input Format
// First line contains two space separated integers denoting values of N and M. Next N lines contains M space separated integers depicting the values of the matrix.

// Output Format
// Print the smallest index (0 indexing) of a row containing the maximum number of 1's.

// Note : if no 1 is present return -1.


function max1Row(mat, n, m) {
  let maxOneCount = 0;
  let maxOneCount_Index;
  for (let i = 0; i < n; i++) {
    let oneCount = 0;
    for (let j = 0; j < m; j++) {
      if (mat[i][j] === 1) {
        oneCount++;
      }
    }
    if (oneCount > maxOneCount) {
      maxOneCount = oneCount;
      // maxOneCount = mat[i]
      maxOneCount_Index = i;
    }
  }
  if (maxOneCount_Index >= 0) return maxOneCount_Index;
  return -1;
}

let matrix = [
    [0,0,0,0,0],
    [0,1,0,1,0],
    [0,1,1,1,0],
    [1,1,1,1,0]
]
console.log(max1Row(matrix,4,5))
