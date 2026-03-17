// "
// An explorer is trapped in a magical maze represented as an n × m grid. He starts at the top-left corner and wants to reach the bottom-right corner. He can only move:

// Right

// Down

// Problem Statement

// Find the total number of unique paths from (0,0) to (n-1,m-1) using recursion.

// Constraints

// 1 ≤ n, m ≤ 15

// No loops allowed

// Only recursion

// Examples
// Input: n = 2, m = 2
// Output: 2

// Paths:
// Right → Down
// Down → Right

// Input: n = 3, m = 3
// Output: 6"

function countPath(i, j, m, n) {
    if (i >= m || j >= n) {
        return 0;
    }
    if (i === m - 1 && j === n - 1) {
        return 1;
    }
    let Right = countPath(i, j + 1, m, n)
    let Down = countPath(i + 1, j, m, n)

    return Right + Down;
}
console.log(countPath(0,0,4,4))