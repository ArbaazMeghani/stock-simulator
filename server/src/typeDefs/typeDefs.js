const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    currentUser: User
    clearUser: User
  }

  type StockInfo {
    symbol: String
    price: Float
    quantity: Int
  }

  type DataPoints {
    year: Int
    month: Int
    price: Float
  }

  type StockData {
    symbol: String
    price: Float
    open: Float
    close: Float
    volume: Int
    data: [DataPoints]
  }

  type User {
    _id: String
    email: String
    username: String
    balance: Float
    watchList: [String]
    stocks: [StockInfo]
  }

  type Mutation {
    login(username: String!, password: String!): String!
    signup(email: String!, username: String!, password: String!): User!
    addToWatchList(symbol: String!): Boolean
    removeFromWatchList(symbol: String!): Boolean
    buyStock(symbol: String!, price: Float!, quantity: Int!): Boolean
    sellStock(symbol: String!, price: Float!, quantity: Int!): Boolean
    addBalance(balance: Float!): Float!
    subtractBalance(balance: Float): Float!
    retrieveStockData(symbol: String!): StockData
  }
`;

module.exports = typeDefs;