// "A magical book has pages numbered from 1 to n.
// You must read all pages forward and then backward using recursion.

// Problem Statement

// Print numbers from 1 to n and then back to 1 using recursion.

// Constraints

// 1 ≤ n ≤ 50

// Example
// Input: n = 3
// Output:
// 1 2 3 2 1"
// function revPage(n) {
//     function readPages(n) {
//         if (n <= 0) return
//         // console.log(n)
//         readPages(n - 1)
//         console.log(n)
//     }
//     (readPages(n))
//     if(n <= 0){
//         return 
//     }
//     console.log(n)

//     return revPage(n-1)

// }

// revPage(3)

function readPages(n, arr = [], onvN = n, tonvN = n - 1,i=1) {
    if (n === 0) {

        function tonv(arr, tonvN,i) {
            if (i > tonvN ) return 0
            if (i<=tonvN) {
                console.log(arr[i])
            }
            tonv(arr, tonvN , i+1)
        }
        function onv(arr, onvN) {
            if (onvN < 0) return 0
            if (onvN >= 0) {
                console.log(arr[onvN])
            }
            onv(arr, onvN - 1)
        }
        onv(arr, onvN)
        tonv(arr, tonvN,i)
        return
    }
    arr.push(n)
    readPages(n - 1, arr, onvN, tonvN)
}
readPages(3)
readPages(4)
readPages(5)

