// "A wizard checks if a word reads the same forward and backward to unlock a door.

// Problem Statement

// Use recursion to check if a string is a palindrome.

// Constraints

// String length ≤ 1000

// Case-sensitive comparison

// Examples
// Input: ""madam""
// Output: true

// Input: ""hello""
// Output: false"

function stringPelindromeCheacker(str){
    const n = str.length-1
    // let line =''
    function reverseString(str,n){
       if(n < 0) return ''
      return str[n]+ reverseString(str,n-1)
    //    console.log(line)
    //    return line+=str[n]
    }
   let line = reverseString(str,n)
    if(str === line) return true
    else return false
}
console.log(stringPelindromeCheacker('madam'))
console.log(stringPelindromeCheacker('hello'))


//###################################################################################//
// function pelindrome(str,start=0,end=str.length-1){
//     if(start>=end) return true
//     if(str[start] !== str[end]) return false
//     return pelindrome(str, start+1,end-1)
// }
// let str= 'madam'
// console.log(pelindrome('hello'))