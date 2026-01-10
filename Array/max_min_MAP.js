let arr = [5,4,6,8,4,2,4,5]
let maximum = arr[0]
let minimum = arr[0]
arr.map((e)=>{
    if(e > maximum) maximum = e
    if(e < minimum) minimum = e   
})
console.log(maximum)
console.log(minimum)



