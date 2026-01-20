
// Object Cloning means creating copies of objects, it helps us in duplicating the data without affecting the original one. 
// there are 2 types of cloning based on certain factors 
// 1. shallow copy
// 2. deep copy

// const { JSON } = require("mysql/lib/protocol/constants/types");

// Shallow copy vs deep copy

// Shallow copy creates a new object that copies the top-level properties but maintains references to nested objects 
// this means modifications to nested objects in the shallow copy will also affect the original object

// Deep copy creates a complete independant copy of ALL PROPERTIES and NESTED OBJECTS, ensuring changes to the duplicate DO NOT AFFECT THE ORIGINAL IN ANY WAY


// property         shallow                         deep
// scope            copies only top level           copies all levels, including nested data
// references       nested objects are referred to  all references are independant
                    // original object
// performance      faster and lightweight          slower because of nesting 
// use cases        flat or less nested obejcts     deeply nested objects or immutable data


const person1 = {
    name : 'abc',
    age : 30,
    gender : 'male' ,
    address : {
        country : "India",
        vill : 'place',
        live : 'on earth',
        coordinate : {
            latitude : '98deg98080f',
            longitude : '45deg480238c',
            day : {
                sun : 9090,
                mon : 7980,
                date :{
                    today : '12/12/12'
                }
            }
        }
    }
}

// console.log(person) // plain object 

let person2 = person1; // 🛞person1 & person2 points the same memory location 

person2.age = 90; //🛞 so changing person2 also affect the person1
// console.log(person1.age)

// ############CLONNG WITH SPREAD OPERATOR############

// spread operator ↣ keep the reference of nasted objects so change in second object also reflect in first object 

// ↣ it is type of shallow copy 

let person3 = {...person1}
// console.log(person3)
person3.address.coordinate.longitude = 'j'
// console.log(person1)


//###########Object.assign()############

let person4 = Object.assign({},person1)
// console.log(person4)
// ↣ it also a type of shallow copy 
person4.address.coordinate.longitude = '90' // changing in second object also affect the first object 
// console.log(person1)

//*************DEEP CLONING************/

//######Using JSON.parse(JSON.stringify())#######

let person5 = JSON.parse(JSON.stringify(person1))
// console.log(person5)
person5.address.coordinate.longitude = 'aa' // JSON.stringify do not affect the first object on changing the second one 
// console.log(person1)
// console.log(person5)


// ############using structuredClone()############

let person6 = structuredClone(person1)
person6.age = 20;
person6.address.coordinate.longitude = 'longitude'
// console.log(person1)
// console.log(person6)