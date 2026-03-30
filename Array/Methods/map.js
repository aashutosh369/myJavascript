// map()
    // map() is an javascript builtin method which itreates each element and returns a new array. and it does not change original array
     
// +++++++++++Syntax++++++++++++//

// const newArray = array.map((element, index, array)=>{
//     return newValue
// })

//+++++++++++++++++++++++++++++//

// Question 1 : 
    // Double the every element of the array

let numbers = [1,2,3,4]

let double = numbers.map((element, index)=>{
    let str = ''
    str += `${index} ${element*2}`
    return str
})

console.log(double)

// Question 2:
    // return an array which contain name and status ->if marks >= 40 then pass else fail

let students = [
    {name:'Aman', marks:45},
    {name:'Rohit', marks:75},
    {name:'Neha', marks:30}
]
function studentStatus(studentsList){
    let passStudents = studentsList.map((student)=>{
        let str = ''
        let status = ''
        if(student.marks >= 40) status += 'Pass'
        else status += 'Fail'
        str += `Name : ${student.name},    Marks : ${student.marks},    Status : ${status}`

        return str
    })
    console.log(passStudents)
}

studentStatus(students)