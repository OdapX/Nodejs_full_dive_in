const GetProducts = require("./products.model");
module.exports = {
  Query: {
    Products: () => {
      return GetProducts();
    },
  },
};
