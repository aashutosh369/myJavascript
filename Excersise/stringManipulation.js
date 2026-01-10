//********String Manipulation ******
//  *Concept -> String manipulation means working with string using built in methods, and since string are immutable every operation returns a neew string 

//  ***********Question 1**********//

// let str = " Hello World "
// console.log(str.trim().length) // 11
// console.log(str.length)        // 13


//  ***********Question 2**********//

// let text = "apple,banana,mango"
// let fruits = text.split(",")  
// // -> .split() is used for converting string to an array
// // -> .join() is used for converting array to an string 
// console.log(fruits[1]) // banana
// console.log(fruits.join("-")) // "apple-banana-mango"


//  ***********Question 3**********//

// let name = "JavaScript"
// console.log(name.slice(0,4))      // Java
// console.log(name.slice(-6))       // Script
// //(-6) -> {name.length-6} = (4) => (4,10)
// console.log(name.substring(4,10)) // Script
// // substring don't support (-ve) index