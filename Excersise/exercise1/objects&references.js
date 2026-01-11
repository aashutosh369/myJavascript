//********Objects & References*********
// 
// ⚡obj2 = obj1
//    -> no new object created
//    -> both points the same reference
//  ↪ Heap Memory
//     ┌─────────────────────────┐
//     │ { name:"Ashutosh", age:21 } │
//     └─────────────────────────┘
//            🔝          🔝
//           obj1         obj2
//
// ⚡ (===)
//      -> cheacks the reference
//      -> don't check the value
//
// ⚡ let obj2 = { ...obj1 }
//     -> spread operater CREATE NEW OBJECT
//     -> copy same data
//     -> ASSIGN NEW ADDRESS
//
//  ↪ Heap Memory
//     ┌─────────────────────┐    ┌─────────────────────┐
//     │ { name: "Ashutosh" }│    │ { name: "Ashutosh" }│
//     └─────────────────────┘    └─────────────────────┘
//             🔝                        🔝
//            obj1                       obj2
//
//
//  **********Question1**********
    // let obj1 = {
    //   neme: "Ram",
    //   age: 20,
    // };
    // let obj2 = obj1 
    // obj2.age = 25
    // console.log(obj1.age)   // 25 
    // console.log(obj2.age)   // 25
//
//
//  **********Question2**********
    // let person = {
    //     name : "Sita",
    //     marks : {
    //         math : 90,
    //         science : 85
    //     }
    // }
    // console.log(person.marks.math) // 90
    // console.log(person['marks']['science']) // 85
    // // ↪ []notation -> used for space saperated key "first name" ↣ (person['first name'])
//
//
//  **********Question3**********
    // let user ={name:"Krishna"}
    // delete user.name  // delete -> remove property from object completely 
    // console.log(user.name) // undefined 
    // console.log(user)      // { }
//
//
//
