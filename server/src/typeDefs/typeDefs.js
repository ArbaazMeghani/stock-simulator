const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    currentUser: User
  }

  type User {
    _id: String
    email: String
    username: String
    watchList: [String]
  }

  type Mutation {
    login(username: String!, password: String!): String!
    signup(email: String!, username: String!, password: String!): User!
    addToWatchList(symbol: String!): Boolean
    removeFromWatchList(symbol: String!): Boolean
    buyStock(symbol: String!, price: Float!, quantity: Int!): Boolean
    sellStock(symbol: String!, price: Float!, quantity: Int!): Boolean
  }
`;

module.exports = typeDefs;