const GetOrders = require("./orders.model");
module.exports = {
  Query: {
    Orders: () => {
      return GetOrders();
    },
  },
};
