// forEach is an Array method, which goes to every element to the array and run a function to it

//++++++++Syntex+++++++++++//

    // Array.forEach((element , index , Array)=>{
    //     console.log(index , element , Array)
    // })

    // --> it don't return anything forEach iterate the original array.

// Question 1 :
    // Find the sum of array
    function sumOfArray() {
    let arr1 = [5, 10, 15];
    let sum = 0;
    arr1.forEach((num) => {
        sum += num;
        // console.log( index, sum , arr1)
    });
    return sum; 
    }
    console.log(sumOfArray())

