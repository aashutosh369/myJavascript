function findSum(arr) {
  //Write your code here
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(findSum(matrix));
