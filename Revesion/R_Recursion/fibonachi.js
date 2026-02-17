
// Fibonach series by iterative method....

// 0 1 1 2 3 5 8 13 21 34...
// 0 1 2 3 4 5 6  7  8  9


function fact(n) {
    let arr = [0, 1]
    for (let i = 1; i < n; i++) {
        let prev = arr[arr.length - 1];
        let pprev = arr[arr.length - 2]
        let curr = prev + pprev;
        arr.push(curr)
    }
    return arr
}
console.log(fact(3).join('  '))
console.log(fact(5).join('  '))
console.log(fact(9).join('  '))
console.log(fact(15).join('  '))

// Fibonachi by Recursive function....

//      Find nth fibonachi number.....

function fibonachi(n){
    if(n===0 || n===1) return n
    return fibonachi(n-1) + fibonachi(n-2)
}
let n = 9
console.log('--->')
console.log(`Fibonachi number at ${n}th term will be : ${fibonachi(n)}`)
console.log('--->')