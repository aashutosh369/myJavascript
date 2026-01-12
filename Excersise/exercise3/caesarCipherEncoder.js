// Caesar Cipher Encoder
// Difficulty: Medium
// Topics: Strings, loops, ASCII

// Implement Caesar Cipher: shift each letter by n positions in alphabet.
// Example: "abc" with shift 1 → "bcd"

// Test Cases:
        // Text	   Shift	Output
        // "abc"	1	    "bcd"
        // "xyz"	3	    "abc"
        // "Hello"	2	    "Jgnnq"
// Hint: Use charCodeAt() and fromCharCode(), handle wraparound (z→a).

function caesarCipherEncoder(str,n){
    let str2 = ''
    for(ch of str){
        let code = ch.charCodeAt(0)
        if((code >= 65 && code <=90) || (code >= 97 && code <= 122)){
            let codeSum = code+n
            let codeDiff = 0
            
            if(codeSum>90 && codeSum < 97){
               codeDiff = codeSum - 90
            }
            let codeResult = 64 + codeDiff
            str2 += String.fromCharCode(code+n)
        }
    }
    return str2
}
console.log(caesarCipherEncoder('abc',1))
console.log(caesarCipherEncoder('xyz',3))
console.log(caesarCipherEncoder('Hello',2))
