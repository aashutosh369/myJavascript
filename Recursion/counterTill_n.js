function countingTillN(n){
    if(n === 0) return 0
    countingTillN(n-1)
    console.log(n)
}

let n = 5
countingTillN(n)