// Calculating Sum of digits using iterative method;

let num = 1234;
let sum = 0
while(num  > 0){
    sum += num%10;
    num = Math.floor(num/10);
}
console.log('--->')
console.log(`Sum of all digits of the given number will be ${sum}`)
console.log('--->')

// Calculating the sum of digits of a given number by using Recursive Function 


let n = 1234
function digitsSum(n){
    // if(n>0 && n<10) return n;
    if(n === 0) return 0
    return digitsSum(Math.floor(n/10)) + n%10; 
}
console.log(digitsSum(n))
console.log('--->')