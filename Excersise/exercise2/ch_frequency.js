// Count Character Frequency
// Difficulty: Easy
// Topics: Strings, objects, loops

// Count how many times each character appears in a string.

// Test Cases:
        // Input	   Output
        // "hello"	    {h:1, e:1, l:2, o:1}
        // "aaa"	    {a:3}
        // "abba"	    {a:2, b:2}
// Hint: Use an object to store counts, loop through string.

function frequencyCounter(str) {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (freq[ch]) {
      freq[ch] = freq[ch] + 1;
    } else {
      freq[ch] = 1;
    }
  }
  return freq;
}
console.log(frequencyCounter("hello"));
console.log(frequencyCounter("aaa"));
console.log(frequencyCounter("abba"));
