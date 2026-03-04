// "
// A robot is placed at position 0 and wants to reach position n.
// It can move either 1 step or 3 steps at a time.

// Problem Statement

// Find total number of ways the robot can reach exactly n using recursion.

// Constraints

// 1 ≤ n ≤ 25"

function wayFinder(n) {
    if (n === 0) return 1;
    if (n < 0) return 0;
    return wayFinder(n - 1) + wayFinder(n - 3)
}
console.log(wayFinder(1))
console.log(wayFinder(2))
console.log(wayFinder(3))
console.log(wayFinder(4))