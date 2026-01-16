// Longest Common Substring
// Given two strings string1 and string2, print the longest common substring. If there is no common substring, then print No Common Substring.

// Input Format
// First line contains string1. Second line contains string2.

// Output Format
// First line contains longest common substring.

// Example 1
// Input

// ABABC
// BABCA
// Output

// ABC
// Explanation

// The longest common substring of the strings ABABC, BABCA and ABCBA is string ABC of length 3. Other common substrings are A, AB, B, BA, BC and C.

// ABABC
//   |||
//  BABCA
//   |||
//   ABCBA

function longestSubstring(string1,string2){
    let longestSubstring = ''
    for(let i = 0 ; i<string1.length; i++){
        for(let j=i+1; j<=string1.length; j++){
            let substring = string1.slice(i,j)
            // console.log(substring)
            if(string2.includes(substring) && substring.length > longestSubstring.length){
                longestSubstring += substring
            }
        }
    }
    console.log(longestSubstring)
}

longestSubstring("ABABC","BABCA")