const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const Schema = buildSchema(`
  type Query{
      description:String
      price: Float
  }
`);
const root = {
  description: "jacket",
  price: 250,
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
