const orders = [
  {
    id: "Order1",
    date: "02-02-2022",
    items: [
      {
        product: {
          id: "Product1",
          description: "old cool product",
          Price: 79.99,
        },
        quantity: 3,
      },
    ],
  },
];

function GetOrders() {
  return orders;
}

module.exports = GetOrders;
