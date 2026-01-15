// problem 2 : matrix Addition 

let matrix1 = [[1,2], [3,4]]
let matrix2 = [[5,6], [7,8]]

// output = [[6,8] , [10,12]]

function matrixAddition(mat1,mat2){
    let matAdd = []
    if(mat1.length === mat2.length){
        for(let i=0; i<mat1.length; i++){
            let res = []
            for(let j=0; j<mat2.length;j++){
                res.push(mat1[i][j] + mat2[i][j])
            }
            matAdd.push(res)
        }
    }else{
        return "Diamentions not equal!"
    }
    return matAdd
}

console.log(matrixAddition(matrix1,matrix2))

// console.log(matrix1.reverse())