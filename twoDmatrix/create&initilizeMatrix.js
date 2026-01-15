// Problem 1;  Create and initilize a matrix

// input -> row , col , default

// input ; row = 3 col = 4 default = 1;

// output : [
//     [1,1,1,1],
//     [1,1,1,1],
//     [1,1,1,1],
//     [1,1,1,1]
// ]

// **************wayOne(1)*************

function createMatrix(row, col, def) {
  let mat = [];
  for (let i = 0; i < row; i++) {
    let res = [];
    for (let j = 0; j < col; j++) {
      res.push(def);
    }
    mat.push(res);
  }
  return mat;
}
let row = 3;
let col = 4;
let def = 1;

console.log(createMatrix(row, col, def));

// ******************wayTwo(2)****************

function createMatrixTwo(row, col, def) {
  let matrix = [];
  for (let i = 0; i < row; i++) {
    matrix[i] = [];
    for (let j = 0; j < col; j++) {
      matrix[i][j] = def;
    }
  }
  return matrix;
}

console.log(createMatrixTwo(3, 5, 10));

// ************way3***********

// using Array() with fill and map
function fillMap(row, col, def) {
  return Array(row)
    .fill()
    .map(() => Array(col).fill(def));
}

console.log(fillMap(3, 3, 4));

// ************way3 finished ***********

// ************way4***********

// using from method

function fromMethod(row, col, def) {
  return Array.from(
    {
      length: row,
    },
    () => {
      return Array.from(
        {
          length: col,
        },
        () => def
      );
    }
  );
}

console.log(fromMethod(3, 3, 9));

// ************way4 finished ***********
