function countDown(n){
    if(n === 0){
        console.log('Launching...!')
        return
    }
    console.log(n)
    return countDown(n-1)
}
let n = 10; 
countDown(n)