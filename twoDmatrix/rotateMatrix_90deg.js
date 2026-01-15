let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// output: [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3],
// ];
function rotateMatrix_90deg(matrix) {
  let rotatedMatrix = [];
  // let transposedMatrix = []
  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let j = 0; j < matrix[i].length; j++) {
      row.push(matrix[j][i]);
    }
    // transposedMatrix.push(row)
    rotatedMatrix.push(row.reverse());
  }
  // return transposedMatrix
  return rotatedMatrix;
}

console.log(rotateMatrix_90deg(matrix));
