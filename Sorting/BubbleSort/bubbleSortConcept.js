// Bubble Sorting
//  bubble metophor : like bubble in an coke can
//  the largest bubble 'bubble up' to the top (or the end of the array)
// we have multiple passes in an array so that at each pass we can bring the largest element to its correct postition 



// Characteristics : 
//  1. adjacent comparision : we always compary neighbour or adjacent element 
//  2. swapping : we swap the element to the largest element to the right 
//  3. multiple passes : this takes care of all elements untill there is not need of more swaps 
//  4. in place sorting : we consider a part of the array as sorted and we focus on growing its size 




function bubbleSort(arr) {
    // let count =0 
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                // count++
                // [arr[j], arr[j+1]] = [arr[j+1] , arr[j]]
            }
        }
    }
    // console.log(count)
    return arr
}

let arr = [1, 5, 3, 8, 9, 3, 4, 5, 4]
console.log(bubbleSort([5,2,4,6,1,3]))

// optimised bubble sort in descending order---

function bubbleSortOptimised(arr) {
    const n = arr.length;


    for (let i = 0; i < n - 1; i++) {
        let flag = false
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
                flag = true
            }
        }
        if (flag === false) break
    }
    return arr
}
console.log(bubbleSortOptimised(arr))

// ##############################################//

const student = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 95 },
    { name: 'Charlie', score: 78 }
]

function studentSort(student) {
    const n = student.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (student[j]['score'] > student[j + 1]['score']) {
                let temp = student[j]['score']
                student[j]['score'] = student[j + 1]['score']
                student[j + 1]['score'] = temp
            }
        }
    }
    return student
}

console.log(studentSort(student))

//#####################################//

// Find kth largest number form the array

let k = 2
function kthLargest(arr, k) {
    let n = arr.length;
    let count = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }

        }
        count++
        if (count === k) {
            return (arr[i])

        }
    }
}
console.log(kthLargest(arr, k))