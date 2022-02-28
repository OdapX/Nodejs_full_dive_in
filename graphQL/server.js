const path = require("path");
const express = require("express");

const { ApolloServer } = require("apollo-server-express");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

const TypeArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const ResolverArray = loadFilesSync(path.join(__dirname, "**/*.resolver.js"));

async function StartApolloServer() {
  app = express();
  const schema = makeExecutableSchema({
    typeDefs: TypeArray,
    resolvers: ResolverArray,
  });

  const server = new ApolloServer({
    schema,
  });

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(3000, () => {
    console.log("listening on port 3000..");
  });
}

StartApolloServer();
