//  Factorial Calculator
// Difficulty: Easy
// Topics: Loops, arithmetic

// Write a function that calculates the factorial of a number.
// Factorial of n (n!) = n × (n−1) × (n−2) × ... × 1
// Example: 5! = 5 × 4 × 3 × 2 × 1 = 120

// Test Cases:
// Input	Output
// 5	120
// 0	1
// 1	1
// 7	5040
// Hint: Use a loop starting from n down to 1.

function factorial(num) {
  let count = 1;
  if (num > 0) {
    for (let i = num; i > 0; i--) {
      count = count * i;
    }
  } else {
    count = 1;
  }
  return count;
}
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(7));
