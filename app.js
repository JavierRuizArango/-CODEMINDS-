const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const { typeDefs } = require("./typeDefs"); // Importing typeDefs from the correct file
const { resolvers } = require("./resolvers");
const { connectDB } = require("./db");

const app = express();
connectDB(); // After initializing Express, connect to the database

app.get("/", (req, res) =>
  res.send("welcome to my api this is made for -CODEMINDS-")
); // This would be if I had a REST API

app.get("*", (req, res) => res.send("Error 404 not found"));

module.exports = app; // With this, I have a basic Express server

async function start() {
  // Start the server

  const apolloServer = new ApolloServer({
    // Extend the already created server and add more routes that are necessary for GraphQL
    typeDefs, // With this, the Apollo server is ready to be executed
    resolvers,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app }); //"After this method, which is specific to Apollo, the routes have already been added; that's why the error message is placed right after."
  app.get("*", (req, res) => res.send("Error 404 not found")); // 404 to the user is placed after the middleware method because otherwise it might have issues with the rest of the routes or connections and stay at 404

  app.listen(3000, () => {
    console.log("server on port 3000", 3000);
  });
}

start();
