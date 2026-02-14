// Check Palindrome Using Recursion

// Problem:
// Check whether a string is a palindrome using recursion.

// Input:

// "madam"


// Output:

// true


// Input:

// "hello"


// Output:

// false

function palindromeCheacker(str){
    let line = ''
    function reverseStr(str , i=0){
        if(i === str.length) return ''
        reverseStr(str,i+1)
        return line += str[i]
    }
    reverseStr(str)
    if(str === line) return true
    else return false
}
console.log(palindromeCheacker('madam'))
console.log(palindromeCheacker('hello'))