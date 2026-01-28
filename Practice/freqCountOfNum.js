

// Group of Numbers
// You are given an array a that contains N integers. All the integers in the array may not be distinct. The number of repetitions of each integer in the array is represented by ri. Your task is to print the integers in the decreasing order of their occurrence in the array.

// Note

// If ri > rj, then ai must be printed before aj.
// If ri == rj, then among ai and aj whichever has a larger value, is printed first.
// Here ri and rj is the number of repetitions of integers ai and aj in the array.

// Input Format
// The first line of the input contains an integer N. The second line contains N space- separated integers representing the elements of array a.

// Output Format
// Print the space separated integers in the decreasing order of their occurrence in the array. The output must be printed in a single line.

// Example 1
// Input

// 6
// 1 2 3 3 2 1
// output

// 3 2 1

function sortByFrequency(array) {
  let freq = {};
  for (let num of array) {
    if (freq[num]) {
      freq[num]++;
    } else {
      freq[num] = 1;
    }
  }
  let numKeys = Object.keys(freq).map(Number);
  let sortKeys = numKeys.sort((a, b) => {
    if (freq[a] == freq[b]) {
      return b - a;
    } else if (freq[a] > freq[b]) {
      return freq[b] - freq[a];
    } else {
      return freq[b] - freq[a];
    }
  });
  let result  = sortKeys.join(" ")
  return result;
}
console.log(sortByFrequency([1]));
