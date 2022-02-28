const {
  GetProducts,
  GetProductsByPrice,
  GetProductByID,
  AddNewProduct,
  AddNewReviews,
} = require("./products.model");
module.exports = {
  Query: {
    Products: () => {
      return GetProducts();
    },
    ProductsByPrice: (_, args) => {
      return GetProductsByPrice(args.min, args.max);
    },
    ProductById: (_, args) => {
      return GetProductByID(args.id);
    },
  },
  Mutation: {
    AddNewProduct: (_, args) => {
      return AddNewProduct(args.id, args.description, args.price);
    },
    AddNewReview: (_, args) => {
      return AddNewReviews(args.id, args.rating, args.comment);
    },
  },
};
