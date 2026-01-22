// *******************
// What is time complexity ?

    // Time complexity measures how the execution time of an algorithm grows as the input size (n) increases

    // ↣ It does not measure actual second 
    // ↣ It measure growth rate 


// *******************
// Why do we need Time Complexity ?

    // ⁕ Different machines have different speeds 
    // ⁕ Some code runs faster/slower on different system
    // ⁕ We need machine-independent comparison


// *******************
// Big-O Notation (O-notation)

    // Big-O describe the upper bound (worst-case time).

// *******************
// Why Worst Case ?
// Beacuse:
//      ⁕ Best case rarely happens
//      ⁕ Worst case guarantees performance



//  ***********Common Time Complexity (Overview)************
//      Complexity           Name                Example
//          ↡                  ↡                    ↡
//         O(1)            Constant         Access array element
//       O(log n)         Logarithmic       Binary Search
//         O(n)             Linear          Loop
//      O(n log n)        Logarithmic       Merge Sort
//        O(n^2)           Quadratic        Nested Loops
//        O(2^n)          Exponential       Recursive subset
//        O(n!)            Factorial        Permutation


// *******************
// ******JavaScript Built-in Methods Time Complexity*******
//          Method                   Complexity
//            ↡                          ↡
//          push/pop                    O(1)
//          shift/unshift               O(n)
//          indexOf                     O(n)
//          includes                    O(n)
//          sort                        O(n log n)
//          map/filter                  O(n)
//          reduce                      O(n)
