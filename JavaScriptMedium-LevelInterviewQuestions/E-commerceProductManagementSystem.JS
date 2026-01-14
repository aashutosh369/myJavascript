// 1. E-commerce Product Management System

// Problem Statement

// You're building a product management system for an e-commerce platform. You have an array of product objects where each product has properties like name, category, price, stock, and rating.

// Write a function processProducts(products, filters) that performs the following operations:

//     Filter products based on criteria:
//         Minimum price
//         Maximum price
//         Category
//         Minimum rating
//         In-stock only

//     Sort the filtered products by a specified field in ascending or descending order.

//     Return a new array with product names and their discounted prices:
//         10% discount for "electronics"
//         15% discount for "clothing"
//         5% discount for all other categories

//     If no products match the filters, return an empty array with a message property indicating that no products were found.

// Input Example

// const products = [
//   { name: "Laptop", category: "electronics", price: 1200, stock: 5, rating: 4.5 },
//   { name: "Headphones", category: "electronics", price: 150, stock: 0, rating: 4.2 },
//   { name: "T-Shirt", category: "clothing", price: 25, stock: 50, rating: 4.0 },
//   { name: "Jeans", category: "clothing", price: 60, stock: 30, rating: 4.7 },
//   { name: "Coffee Maker", category: "home", price: 80, stock: 10, rating: 3.8 },
//   { name: "Smartphone", category: "electronics", price: 800, stock: 15, rating: 4.8 },
//   { name: "Sneakers", category: "clothing", price: 90, stock: 20, rating: 4.3 }
// ];

// const filters = {
//   minPrice: 50,
//   maxPrice: 1000,
//   category: null,     // null means all categories
//   minRating: 4.0,
//   inStockOnly: true,
//   sortBy: "price",    // "price", "rating", "name"
//   sortOrder: "desc"   // "asc" or "desc"
// };

// Expected Output Shape

// [
//   {
//     productName: "Smartphone",
//     discountedPrice: 720,
//     originalPrice: 800,
//     savings: 80
//   },
//   // ...
// ]

function processProducts(products, filteres) {
  let result = [];
  let discountedPrice;
  let originalPrice;
  for (let e of products) {
    if (e.price >= filteres.minPrice && e.price <= filteres.maxPrice) {
      if (e.rating >= filteres.minRating) {
        if (e.stock > 0) {
          if (filteres.category === e.category || filteres.category === null) {
            if (e.category === "electronics") {
              discountedPrice = e.price - e.price * 0.1;
              originalPrice = e.price;
            } else if (e.category === "clothing") {
              discountedPrice = e.price - e.price * 0.15;
              originalPrice = e.price;
            } else {
              discountedPrice = e.price - e.price * 0.5;
              originalPrice = e.price;
            }
            result.push({
              productName: e.name,
              originalPrice: e.price,
              discountedPrice: discountedPrice,
              savings: originalPrice - discountedPrice,
            });
          }
        }
      }
    }
  }
//   return result.length > 0 ? result : "No Data Found!";
if(result.length <= 0) {
    return `${[]} Product not found!`
}else{
    // shortedProduct = result.sort((a,b)=>{

    // })

    return result
}
}

const productsOne = [
  {
    name: "Laptop",
    category: "electronics",
    price: 1200,
    stock: 5,
    rating: 4.5,
  },
  {
    name: "Headphones",
    category: "electronics",
    price: 150,
    stock: 0,
    rating: 4.2,
  },
  { name: "T-Shirt", category: "clothing", price: 25, stock: 50, rating: 4.0 },
  { name: "Jeans", category: "clothing", price: 60, stock: 30, rating: 4.7 },
  { name: "Coffee Maker", category: "home", price: 80, stock: 10, rating: 3.8 },
  {
    name: "Smartphone",
    category: "electronics",
    price: 800,
    stock: 15,
    rating: 4.8,
  },
  { name: "Sneakers", category: "clothing", price: 90, stock: 20, rating: 4.3 },
];
const filtersOne = {
  minPrice: 50,
  maxPrice: 1000,
  category: null,
  minRating: 4.0,
  inStockOnly: true,
  sortBy: "price",
  sortOrder: "desc",
};

console.log(processProducts(productsOne, filtersOne));
