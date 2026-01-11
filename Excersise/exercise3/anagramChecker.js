// Anagram Checker
// Difficulty: Medium
// Topics: Strings, arrays, sorting

// Check if two strings are anagrams (contain same letters in different order).
// Ignore spaces and case.

// Test Cases:
    // Input 1	         Input 2	    Output
    // "listen"	         "silent"	    true
    // "hello"	         "world"	    false
    // "A gentleman"	"Elegant man"	true
    // "rat"	        "car"	        false

// Hint: Convert to lowercase, remove spaces, sort characters, compare.


function anagramsCheacker(str1 , str2){
    sentance1 = str1.toLowerCase().split('').sort().join('')
    sentance2 = str2.toLowerCase().split('').sort().join('')
    if(sentance1 === sentance2) return true
    return false
}

console.log(anagramsCheacker("listen","silent"))
console.log(anagramsCheacker("world","hello"))
console.log(anagramsCheacker("A gentleman","Elegant man"))
console.log(anagramsCheacker("rat","car"))