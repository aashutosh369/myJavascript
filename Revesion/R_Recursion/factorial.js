// Calculate the factorial of n using Recursion

function fact(n){
    if(n===1) return 1
    let ans = n*fact(n-1)
    return ans 
}
console.log(fact(5))

//Due to call stack formation [SPACE complexity -> Olog(n)]
// [Time complexity -> Olog(n)]