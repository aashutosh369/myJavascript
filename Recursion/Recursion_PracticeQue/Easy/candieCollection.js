// "A child collects candies every day.
// On day n, the child gets n candies more than the previous day.

// Problem Statement

// Find total candies collected after n days using recursion.

// Constraints

// 1 ≤ n ≤ 1000

// Examples
// Input: n = 5
// Output: 15

// Explanation:
// 1+2+3+4+5"

function candiesCollection(n){
    if(n === 0) return 0
    return n+candiesCollection(n-1)
}
console.log(candiesCollection(5))