// // Hoisting & Scope Chain (Advanced Theory)

//  ***********Question 1**********//

// console.log(x)    //**Undefined      **//
// console.log(y)   //**Referance Error**// Cannot access 'y' before initialization
// var x=5
// let y=10

//  ***********Question 2**********//

// function test(){
//     console.log(a)    //**Undefined**//
//     console.log(b)   //**Reference Error**// Cannot access 'b' before initialization
//     var a = 10;
//     let b =20
// }
// test()

//  ***********Question 3**********//

// let x =10
// function outer(){
//     let x = 20
//     console.log(`value of outer ${x}`)
// }
// outer()
// console.log(x)

// //  ->**Hoisting phse (memory creation)**
// //      let x       // hoisted but uninitialized (TDZ)
// //      function outer(){ ... } fully hoisted
// //  -> **Execution phase**
// //      x = 10

//  ***********Question 4**********//

// let x =10
// function outer(){
//     let x =20
//     function inner(){
//         let x =30
//         console.log(`inner x = ${x}`) // 30
//     }
//     inner()
//     console.log(`outer x = ${x}`) //20
// }
// outer()
// console.log(`global x = ${x}`) // 10

// // *********js internal working********//
// // let x // hoisted (TDZ)
// // function outer() -> fully hoisted
// // -> when outer is called
// //    let x     // TDZ
// //    function inner() ->hoisted
// //  -> when inner called
// //     let x     // TDZ
