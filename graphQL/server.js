const path = require("path");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

const TypeArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const Schema = makeExecutableSchema({
  typeDefs: TypeArray,
});

const root = {
  Products: require("./Products/products.model"),
  Orders: require("./Orders/orders.model"),
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
