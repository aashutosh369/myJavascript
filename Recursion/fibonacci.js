// let num = 13; 
// let sum =0
// function fibonacci(num, i=0){
//     if(i===num) return;
//     if(i === 0){
//         sum = i+1
//     }else{
//         sum = i+sum
//     }
//     console.log(sum)
//     fibonacci(num, i+1)
// }
// fibonacci(6)



// function fibonacci(n){
//     if (n === 0) return 0;
//     if(n ===1) return 1

//     return fibonacci(n-1) + fibonacci(n-2)
// }

// for(let i = 0 ; i<n; i++){  
//     console.log(fibonacci(i))
// }
let n = 1
function fibonacci(n){
    if (n === 0) return 0;
    if(n ===1) return 1

    return fibonacci(n-1) + fibonacci(n-2)
}
let arr = []
for(let i = 0 ; i<=n; i++){  
    arr.push(fibonacci(i))
}
console.log(arr)