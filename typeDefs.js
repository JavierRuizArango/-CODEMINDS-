// In GraphQL, I can always query the backend and get responses. That's why queries and mutations are used to alter data, whether it's deleting, updating, or creating.

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

module.exports = { typeDefs };
