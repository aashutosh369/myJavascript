const obj = {
    a : NaN,
    b : undefined
}
let {a = 10, b = 20} = obj
console.log(a)  // NaN b/c -> if NaN and Null comes then it will not change 
console.log(b)  // 20
console.log(obj) // main obj is not change during destructuring 