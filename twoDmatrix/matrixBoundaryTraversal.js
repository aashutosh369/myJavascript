// Boundary Traversal of matrix
// Given an m*n matrix, print the boundary traversal of the matrix in clockwise order.

// Input Format
// First line contains the values m and n.

// Next m lines contain n-spaced integers.

// Output Format
// Print the boundary traversal of the matrix in clockwise order.



function boundaryTraversal(m, n, matrix) {
  
	// Write your code here
	// console.log(matrix)
  let top = 0; 
  let bottom = m-1; 
  let left =0 ; 
  let right = n-1; 
  let str = ''

// top 
  
  for(let i=left; i<=right ; i++){
    // str += matrix[top][i] + ' '
    console.log(matrix[top][i])
  }
  top++
// right boundary 
  for(let i = top ; i<= bottom; i++){
    // str +=matrix[i][right] + ' '
    console.log(matrix[i][right])
  }
  right--
  // bottom boundary
  if(top<bottom){

  
  for(let i=right; i>=left; i--){
    // str += matrix[bottom][i] + ' '
    console.log(matrix[bottom][i])
  }
  bottom--
  }
  // left side
  if(left<right){

  
  for(let i = bottom; i >= top ; i--){
    // str += matrix[i][left] + ' '
    console.log(matrix[i][left])
  }
  left++
  }
  console.log(str.trim())
}
let matrix = [
    [1,2,3,4],
    [4,5,6,7],
    [7,8,9,8]
]


boundaryTraversal(3,4,matrix)