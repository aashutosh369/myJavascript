// ********** Array Methods & Mutation ************

        // | Method  | Mutates? |
        // | ------- | -------- |  ___________
        // | push    | yes        |           |
        // | pop     | yes        |           |
        // | shift   | yes        |           |
        // | unshift | yes        |   (same reference)
        // | splice  | yes        |           |
        // | sort    | yes        |           |
        // | reverse | yes       _|___________|
        // | map     | no       |             |
        // | filter  | no       |             |
        // | reduce  | no       |  (returns new array)
        // | slice   | no       |  {different reference}
        // | concat  | no       |_____________|



//  ***********Question 1**********//

// let arr1 = [1,2,3]
// let arr2 = arr1
// arr2.push(4)         
// console.log(arr1)  // [1,2,3,4]
// console.log(arr2)  // [1,2,3,4]
// console.log(arr1 === arr2)  //true


// //     Heap Memory
// //        _____________     
// //       |             |
// //       | [1,2,3]     |   <- reference
// //       |_____________|
// //
// //       arr1 ------> reference 
// //       
// //       let arr2 = arr1 
// //         -> variable don't store the array itself 
// //         -> They store a (reference)[address in memory]
// //       arr1 ------> reference 
// //       arr2 ------> reference 
// //         ->so both points the same array so both see the changes 



//  ***********Question 2**********//

// let nums = [5,2,8,1,9]
// console.log(nums.sort()) // [1,2,,5,8,9]
// console.log(nums) // sort() -> don't returns new array so nums changed due to {same reference} 


//  ***********Question 3**********//

// let arr = [1,2,3,4,5]
// let result = arr.slice(1,4) // slice() ->return new array don't mutate the original one , b/c reference is difference 
// console.log(result) // [2,3,4]
// console.log(arr)    // [1,2,3,4,5]

// ********practice ********//
// let arr = [1,2,3,4,5]
// console.log(arr.slice(1,4))
// console.log(arr)