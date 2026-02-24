// "A pirate finds a treasure chest containing coins stacked in a triangular way.
// Top row has 1 coin, next has 2, then 3, and so on.

// Problem Statement

// Given n rows, find the total number of coins using recursion.

// Constraints

// 1 ≤ n ≤ 1000
// Examples
// Input: n = 4
// Output: 10
// Explanation:
// 1 + 2 + 3 + 4 = 10"

function coinStack(n){
    if(n <=0 ) return 0; 
    return n + coinStack(n-1)
}
console.log(coinStack(1))
console.log(coinStack(2))
console.log(coinStack(3))
console.log(coinStack(4))