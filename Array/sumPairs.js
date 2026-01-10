// Find all pairs in an array that sum to a target value.
const arr = [2, 4, 3, 5, 7, 8, 9];
const sum = 7;
let n = arr.length;
let pairs = [ ]
let count = 0;
for (let i = 0; i < n; i++) {
  // let s = 0;
  for (let j = i + 1; j < n; j++) {
    // s +=arr[j];
    if (arr[i] + arr[j] === sum) {
      count++;
        pairs.push([arr[i], arr[j]])
    }
  }
}
console.log(count);
console.log(pairs)
