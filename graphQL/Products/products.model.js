const products = [
  {
    id: "Product1",
    description: "cool product",
    price: 99.99,
    reviews: [{ rating: 5, comment: "excellent" }],
  },
];

function GetProducts() {
  return products;
}
module.exports = GetProducts;
