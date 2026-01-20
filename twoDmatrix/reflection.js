// Reflection
// You are given a set of points on a 2D plane. Your task is to determine whether there exists a reflection line parallel to the Y-axis that can reflect all the given points.

// Write a function checkReflection(points) that takes an array of points as input and returns "YES" if a reflection line exists, and "NO" otherwise.

// Input Format
// The first line contains a single integer T denoting the number of test cases.

// The next T lines contain two integers x and y separated by a space, representing the coordinates of a point on the 2D plane.

// Output Format
// The function should return a string "YES" if a reflection line exists, and "NO" otherwise.

// Example 1
// Input

// 4
// 1 1
// -1 1
// -6 6
// 6 6
// output

// YES
// Explanation

// Explanation:- X = 0 line can reflect all the points.

function reflection(points) {
  let minX = Infinity;
  let maxX = -Infinity;
  let obj = {};

  for (let i = 0; i < points.length; i++) {
    let x = points[i][0];
    let y = points[i][1];
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    obj[x + "," + y] = true;
  }
  //   console.log(obj);

  let sum = minX + maxX;

  for (let i = 0; i < points.length; i++) {
    let x = points[i][0];
    let y = points[i][1];

    let mirrorX = sum - x;
    let mirrorKey = mirrorX + "," + y;
    if (!obj[mirrorKey]) {
      return "NO";
    }
  }
  return "YES";
}

let points = [
  [1, 1],
  [-1, 1],
  [-6, 6],
  [6, 6],
];

console.log(reflection(points))
