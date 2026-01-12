// Star Pattern Challenge: Alternating Pyramid

// Write a program that prints an alternating pyramid pattern where odd-numbered rows contain asterisks (*) and even-numbered rows contain hash symbols (#). The program should take a positive integer \(n\) as input, representing the number of rows.

// ### Input
// - A single positive integer n (where n>=3)

// ### Output
// An alternating pyramid pattern where:
// - Odd rows (1st, 3rd, 5th...) use asterisks (*)
// - Even rows (2nd, 4th, 6th...) use hash symbols (#)
// - Each row is centered with appropriate spacing
// - Row i contains 2i - 1 symbols

// ### Example

// **Input:** 5

// **Output:**
// ```
//     *
//    ###
//   *****
//  #######
// *********
// ```

// **Input:** 7

// ```
//       *
//      ###
//     *****
//    #######
//   *********
//  ###########
// *************
// ```

// ### Constraints
// - \(3 <= n <= 50\)
// - If n < 3, print "Invalid input"

// - Calculate leading spaces for each row: n - i spaces for row i
// - Number of symbols in row i:2i-1
// - Use modulo operator to determine whether to print * or #

let n = 5;
for (let i = 1; i <= n; i++) {
  let line = "";
  for (let j = n - i; j > 0; j--) {
    line += " ";
  }
  if (i % 2 === 0) {
    for (let j = 1; j <= 2 * i - 1; j++) {
      line += "#";
    }
  } else {
    for (let j = 1; j <= 2 * i - 1; j++) {
      line += "*";
    }
  }
  console.log(line);
}
