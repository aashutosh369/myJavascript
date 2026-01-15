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

function createMatrix(row, col , def ){
    let mat = []
    for(let i=0; i<row; i++){
        let res = []
        for(let j=0 ; j<col; j++){
            res.push(def)
        }
        mat.push(res)
    }
    return mat
}


// ******************wayTwo(2)****************

function createMatrixTwo(row,col,def){
    let matrix = []
    for(let i=0; i<row; i++){
        matrix[i] = []
        for(let j=0 ; j<col; j++){
            matrix[i][j] = def
        }
    }
    return matrix
}

// ************way3***********


// using Array() with fill and map
function fillMap(row,col,def){
    return Array(row).fill().map(()=>Array(col).fill(def))
}


// ************way3 finished ***********

let row = 3
let col = 4
let def = 1

console.log(createMatrix(row,col,def))
console.log(createMatrixTwo(3,5,10))
console.log(fillMap(3,3,4))