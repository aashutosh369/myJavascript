// filter() -> filter() is an javascript method which returns elements into new array if elements mathch the condition

//++++++++++++++Syntex++++++++++++//

// Array.filter((element , index , array)=>{
//     return condition ;
// });

// Question 1:
// find even numbers from array
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = arr1.filter((element, index) => {
  // return element%2 === 0;
  if (element % 2 === 0 && index >= 3) {
    return element;
  }
});
console.log(evenNumbers);

// Question 2:
let users = [
  { name: "Ram", age: 17 },
  { name: "Shyam", age: 18, place: { vil: "xyz" } },
  { name: "Mohan", age: 22 },
];

let adults = users.filter((user)=>{
    return user.age >=18
})

console.log(adults)   