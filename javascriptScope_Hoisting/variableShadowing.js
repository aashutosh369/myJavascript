//Question:
    // Variable Shadowing

let a = 1
function check(){
    let a = 2 ; //inside a function scope is changed so you can create variable with same name which is in outer scope
    //NOTE -> you can't create same name variable in the same scope 
    console.log(a)      //2 
}
check()
console.log(a)          //1
