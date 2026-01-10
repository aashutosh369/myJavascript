// there are 3 scopes

// global, function, block 

// let and const respect all scopes

// var doesnt respect block scope 

console.log(func())
let number = 10
// global scope 
function func(){
    // function scope
    if(true){
        // block scope 
        const constnumber = 50; // not goes out from outside block scope
        let letnumber = 50; // not goes out from outside block scope
        var varnumber = 50 ; // goes outside from outside of block scope 
    }
 
    // console.log(varnumber)
    return varnumber
}

// ################# hoisting logic ##################### //

sayHello()

var sayHello = function(){
    console.log("variable")
}

function sayHello(){
    console.log("Function")
}

sayHello() 

// ############# DECELETATION ##################

var a = 10;

{ // var can be redeclerable by let or const 
    let a = 20 ; 
    console.log(a)
}

// let b = 10;

// {  // let can't be redeclerable by var 
//     var b = 20 ;
//     console.log(a)
// }

