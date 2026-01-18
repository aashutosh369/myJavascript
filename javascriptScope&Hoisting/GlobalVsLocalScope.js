// Question 1 : Global vs Local Scope 

let x =5; 
function show(){
    let x = 10;
    console.log(x)
}
show()             // 10
console.log(x)     // 5 