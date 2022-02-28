const products = [
  {
    id: "Product1",
    description: "cool product",
    price: 99.99,
    reviews: [{ rating: 5, comment: "excellent" }],
  },
  {
    id: "Product2",
    description: "cool product2",
    price: 25,
    reviews: [{ rating: 5, comment: "excellent" }],
  },
];

function GetProducts() {
  return products;
}

function GetProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price <= max && min <= product.price;
  });
}
function GetProductByID(id) {
  return products.find((product) => {
    return product.id === id;
  });
}

function AddNewProduct(id, description, price) {
  const NewProduct = {
    id: id,
    description: description,
    price: price,
    reviews: [],
  };
  const Old_instance = products.find((product) => {
    return product.id === id;
  });
  if (!Old_instance) {
    products.push(NewProduct);
    console.log("Added !");
    return NewProduct;
  }
  return { id: "already exists" };
}

function AddNewReviews(id, rating, comment) {
  products
    .find((product) => product.id === id)
    .reviews.push({ rating: rating, comment: comment });

  return products.find((product) => product.id === id);
}

module.exports = {
  GetProducts,
  GetProductsByPrice,
  GetProductByID,
  AddNewProduct,
  AddNewReviews,
};
