// Dish Price
// You are working on a project for a local restaurant. The restaurant serves a variety of dishes, and each dish has a unique identification number, a name, and a price. Your task is to create a function that takes in a 2D array of dishes and returns the total price of all the dishes.

// Input Format
// A 2D array of integers, arr, where each subarray represents a dish and has the following format:

// [id, name, price]

// Output Format
// An integer denoting sum of all the dishes.

// Example 1
// Input

// [["1", "Dish1", 10],["2", "Dish2", 20], ["3", "Dish3", 30]]

// Output

// 60

function totalPrice(arr) {
  let price = [];
  let priceSum = 0;
  for (let i = 0; i < arr.length; i++) {
    price.push(arr[i].pop());
  }
  for (e of price) {
    priceSum += e;
  }
  return priceSum;
}

let dishOne = [
  ["1", "Dish1", 10],
  ["2", "Dish2", 20],
  ["3", "Dish3", 30],
];
console.log(totalPrice(dishOne));
