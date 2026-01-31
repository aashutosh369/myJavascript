// Write function that takes a string and returns the count of unique character

const str = "Hello world"

function uniqueCharCount(str){
    let freq = new Set();
    for(let i=0; i<str.length; i++){
        freq.add(str[i].toLowerCase())
    }
    console.log(freq.size)
}

uniqueCharCount(str)

//************************** */

console.log(new Set(str.toLowerCase()).size)


//************************ */

let arr = [1,1,2,3,4,4]
function checkDuplicate(){
    let setOfArray = new Set()
    for(let i=0; i<arr.length; i++){
        setOfArray.add(arr[i])
    }
    if(arr.length !== setOfArray.size){
        console.log("Duplicate found!")
    }
}

(checkDuplicate(arr))

//OR

if(new Set(arr).size !== arr.length) console.log("Duplicate!")