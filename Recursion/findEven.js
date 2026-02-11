let array = [1,2,3,4,5,6,7,8]

function evenNumber(arr , i=0){
    if(i >= arr.length) return
    if(arr[i] %2 === 0 ){
        console.log(arr[i])
    }
    evenNumber(arr, i+1)
}

evenNumber(array)