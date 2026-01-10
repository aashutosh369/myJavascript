const products = [
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
  {
    name: "T-Shirt",
    category: "clothing",
    price: 25,
    stock: 50,
    rating: 4.0,
  },
  {
    name: "Jeans",
    category: "clothing",
    price: 60,
    stock: 30,
    rating: 4.7,
  },
  {
    name: "Coffee Maker",
    category: "home",
    price: 80,
    stock: 10,
    rating: 3.8,
  },
  {
    name: "Smartphone",
    category: "electronics",
    price: 800,
    stock: 15,
    rating: 4.8,
  },
  {
    name: "Sneakers",
    category: "clothing",
    price: 90,
    stock: 20,
    rating: 4.3,
  },
];

let filters = {
  minPrice: 50,
  maxPrice: 1000,
  category: null,
  minRating: 4,
  inStockOnly: true,
  sortOrder: "asc",
};

function processProducts(products, filters) {
  let filtered = products.filter((p) => {
    return (
      p.price >= filters.minPrice &&
      p.price <= filters.maxPrice &&
      (p.category === filters.category || filters.category === null) &&
      p.rating >= filters.minRating &&
      (filters.inStockOnly == true || p.stock > 0)
    );
  });
  if (filtered.length === 0) {
    return { message: "No products found" };
  }

  // 2️⃣ MAP (discount + new object)
  let result = filtered.map((p) => {
    let discount = 5;
    if (p.category === "electronics") discount = 10;
    if (p.category === "clothing") discount = 15;

    let savings = (p.price * discount) / 100;

    return {
      productName: p.name,
      discountedPrice: p.price - savings,
      originalPrice: p.price,
      savings: savings,
    };
  });

  // 3️⃣ SORT
  result.sort((a, b) => {
    return filters.sortOrder === "asc"
      ? a.discountedPrice - b.discountedPrice
      : b.discountedPrice - a.discountedPrice;
  });

  return result;
}

// CALL
console.log(processProducts(products, filters));
