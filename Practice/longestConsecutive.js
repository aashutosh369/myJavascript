// given an unsorted array of integer , find the longht of the longest consecutive elements sequence . O(n)

let arr = [100,0, 4, 200, 1, 3, 2];

// function longestSeq(nums) {
//   let maxLength = 1;
//   let numSet = new Set(nums);
//   for (let num of nums) {
//     if (numSet.has(num + 1)) {
//       maxLength++;
//     }
//   }
//   console.log(maxLength);
// }

// longestSeq(arr);

function longestSeq(nums){
  let maxLength = 0;
  let numSet = new Set(nums);
  for(const num of nums){
    if(!numSet.has(num-1)){
      let currentNum = num;
      let currentLength = 1;
      while(numSet.has(currentNum+1)){
        currentNum++
        currentLength++
      }
      maxLength = Math.max(maxLength,currentLength)
    }
  }
  return maxLength
}