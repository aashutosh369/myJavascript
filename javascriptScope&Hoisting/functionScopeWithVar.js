
// Question 2: Function Scope with var

function test(){
    var a = 20;
}
console.log(a) // ReferenceError : a is not defined

// ⚡ beacuse: 
//         var a =20 is inside the function scope not in block scope. 
//         var respect the function scope and can't be accessible outside the function so it gives- ReferenceError : a is not defined