const path = require("path");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

const TypeArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const ResolverArray = loadFilesSync(path.join(__dirname, "**/*.resolver.js"));

const Schema = makeExecutableSchema({
  typeDefs: TypeArray,
  resolvers: ResolverArray,
});

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("listening on port 3000..");
});
