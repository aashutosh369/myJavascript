// Question:
//      Function Expression Hoisting
sayHi()
var sayHi = function(){
    console.log('hi!')
}

// in this case {var sayHi}..>> works as a varriable
    //..>>so {var sayHi}->hoist but value will be undefined


// // after hoisting javascript internaly see it as 

    //         var sayHi;  // hoisted (undefined)
    //         sayHi();    // here it gives an erry 
    //             // TypeError: sayHi is not a function 
    //             //..b/c: sayHi is hoisted as varriable not as a function so after calling sayHi() as a function it gives a TypeError
    //         sayHi = function(){
    //             console.log('hi!')
    //         }

    // NOTE : 
        // -> in function decleration ..>> whole function body will get hoisted 
        // -> but in function expressio ..>> only variable will get hoisted so by the time of execution it will give [TypeError: sayHi is not a function]