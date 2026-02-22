// Given two numbers p & q calculate p(pow(q))

// by iterative method 
function calculate(a, b) {
    let result = 1
    for (let i =0; i<b; i++){
        result *= a;
    }
    return result
}
// console.log(calculate(3,4))

// by recursive logic 

function calculatePow(a,b){
    if(b===0) return 1
    return a*calculatePow(a,b-1)
}
console.log(calculatePow(3,3))