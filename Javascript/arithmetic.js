// let a = 5 
// console.log(a)
// let b = --a
// console.log(--a)
// console.log(b)


// // COMPOUND ASSIGNMENT OPETATOR

// // let x = 10 
// // x= x+5 
// // x += 5

// // console.log(NaN === NaN)

// // ************ type coersion************// 

// console.log(1+"1") // number and string can't be added
// console.log(1-"1") // it will convert string to number except (+) for all (-,*,/,%) etc.

// console.log(typeof([]+[])) // arrays are converted to string during concatenataion 

// console.log([1,2,3,4]+[5,6,7,8])

// console.log("20" - "10")



// console.log(true+true) //2
// console.log(true - false) // 1
// console.log(false + false) // 0 
// console.log(true * 5) // 5

// // boolean value are coerced into number

// // 

// let user = {
//     isAdmin : true, 
//     isActive : false,
//     role : "editor"
// }

// if(user.isAdmin == true && user.isActive ==true){
//     console.log("manageUsers")
// }else if(user.role=="editor", user.isActive==true){
//     console.log("editContent")
// }else{
//     console.log("readContent")
// }

if(EMERGENCY_VEHICLES){
    console.log("GREEN")
}else{
    if("yellow"){
        console.log("green")
    }else if("green"){
        console.log("red")
    }else{
        console.log("green")
    }
}