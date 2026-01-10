let arr = [5,4,6,8,4,2,4,5]

let max = arr.reduce((acc,curr)=>{
    return curr>acc ? curr : acc
},arr[0])

console.log(max)

let minimum = arr.reduce((acc,curr)=>{
    return curr < acc ? curr : acc
},arr[0])

console.log(minimum)