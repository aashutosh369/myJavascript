// HOISTING

// hoisting in javascript is the machanism where variable and function declaration are automatically moved to the top of their contaning scope before the code is executed 

// var hoisting -> variables decleared with var are hoisted at the top of thir scope and initialised woth the value undefined

// function hoisting -> all functions are comes at the top of the file in the javascript  

// console.log(varVariable) // undefined 

// var varVariable = 10
// let letVariable = 20

// console.log(varVariable) //10
// console.log(letVariable) //20

// console.log(greet())
// function greet(){       // any functions are hoisted on the top of the file in javascript 
//     console.log("Hello")
//     // return "Hello"

// }



// ############# CONCEPT OF SCOPE HOIESTING CHANING ###########


// var foo = function bar(){
//     console.log(typeof bar)
//     return 1
// }
// // 
// console.log(typeof bar)  // this run first -> undefined
// foo() // -> function 

// Practice*******

// foo = 5
// console.log(foo)

// console.log(typeof foo)



//      construct                hoisted?              initialized             accessible before 
//                                                                             declaration
// 
//          var                  yes                        no                      undefined
//          
//          let                  yes                    uninitialized (TDZ)          no    
// 
//          const                yes                    uninitialized (TDZ)          no
// 
// 
// 
// 
// 
// 

// var double = 22;

// function double(num){
//     return (num*2)
// }

// console.log(typeof double)

let rate = 10;

function calculate(){
    console.log(rate)
    let rate = 20;
}
calculate()