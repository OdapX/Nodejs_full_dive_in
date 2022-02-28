const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const Schema = buildSchema(`
  type Query{
      Products : [Product]   
      Orders : [Order]
  }

  type Product {
     id :ID!
     description:String
     price : Float
     reviews : [Review]
  }
  type Review {
    rating : Int!
    comment : String
  }

  type Order {
    id : ID!
    date : String
    items : [Item]
  }
  type Item {
      product : Product!
      quantity : Int!
  }
  

`);
const root = {
  Products: [
    {
      id: "Product1",
      description: "cool product",
      price: 99.99,
      reviews: [{ rating: 5, comment: "excellent" }],
    },
  ],
  Orders: [
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
  ],
};
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("listening on port 3000..");
});
