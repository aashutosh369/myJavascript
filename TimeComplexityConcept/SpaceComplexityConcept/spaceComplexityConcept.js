// What is Space Complexity ?

    //Space Complexity measures how much extra memory an algorithm use as input size (n) incresases

// It does not include : 
    //  Input itself 
    //  Output itself

// It include :
    //  Extra variables
    //  Data Structures
    //  Recursion stack 
    //  Temporary memory

// Why Space Complexity Matters ?

// Beacuse : 
    // Memory is limited
    // Some system (embedded, mobile, competitive programing) care more about memory then speed 
    // Efficient algorithm balance time + Space 

// pace Complexity vs Time Complexity
    // Time Complexity	        Space Complexity
    // How fast             	How much memory
    // CPU focused          	RAM focused
    // Loops, recursion	        Variables, arrays, stack    

// O(1) – Constant Space

    // Memory usage does not grow with input size.

// Example
    // function sum(a, b) {
    //   let result = a + b;
    //   return result;
    // }
// Memory used:
    // result → 1 variable

// O(n) – Linear Space

    // Memory grows linearly with input size.

// Example
    // function copyArray(arr) {
    //   let newArr = [];

    //   for (let i = 0; i < arr.length; i++) {
    //     newArr.push(arr[i]);
    //   }

    //   return newArr;
    // }

// Extra memory:
    // new array of size n