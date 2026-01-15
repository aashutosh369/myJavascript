// Shopping Cart Calculation

// Problem Statement

// You're building a shopping cart system with discounts and taxes.

// Write a function calculateCart(cartItems, discounts, taxRate, couponCode) that:

//     Calculates subtotal for each item (price × quantity).

//     Applies category-based discounts using a discounts configuration object.

//     Applies a coupon code (if applicable) on the total after category discounts.

//     Calculates tax on the discounted total.

//     Returns:
//         A detailed breakdown per item
//         A summary object containing totals and savings

// Input Example

// const cartItems = [
//   { id: 1, name: "Laptop",   price: 1000, quantity: 1, category: "electronics" },
//   { id: 2, name: "Mouse",    price: 25,   quantity: 2, category: "electronics" },
//   { id: 3, name: "T-Shirt",  price: 20,   quantity: 3, category: "clothing" },
//   { id: 4, name: "Book",     price: 15,   quantity: 2, category: "books" }
// ];

// const discounts = {
//   electronics: 0.10,    // 10% off
//   clothing: 0.15,       // 15% off
//   books: 0.05           // 5% off
// };

// const taxRate = 0.08;   // 8% tax
// const couponCode = "SAVE20"; // Example coupon

// Expected Output Shape

// {
//   items: [
//     {
//       id,
//       name,
//       price,
//       quantity,
//       category,
//       subtotal,         // price * quantity
//       discount,         // discount amount
//       discountedPrice   // subtotal - discount
//     },
//     // ...
//   ],
//   summary: {
//     subtotal: number,           // total before any discounts
//     categoryDiscounts: number,  // sum of all category discounts
//     couponDiscount: number,     // discount from coupon
//     priceBeforeTax: number,     // after all discounts, before tax
//     tax: number,                // tax amount
//     finalTotal: number,         // final payable amount
//     totalSavings: number        // total discount (category + coupon)
//   }
// }


function calculateCart(cartItems, discounts, taxRate, couponCode){

}


const cartItems = [
  { id: 1, name: "Laptop",   price: 1000, quantity: 1, category: "electronics" },
  { id: 2, name: "Mouse",    price: 25,   quantity: 2, category: "electronics" },
  { id: 3, name: "T-Shirt",  price: 20,   quantity: 3, category: "clothing" },
  { id: 4, name: "Book",     price: 15,   quantity: 2, category: "books" }
];

const discounts = {
  electronics: 0.10,    // 10% off
  clothing: 0.15,       // 15% off
  books: 0.05           // 5% off
};

const taxRate = 0.08;   // 8% tax
const couponCode = "SAVE20"; // Example coupon

console.log(calculateCart())