const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    currentUser: User
  }

  type User {
    _id: String
    username: String
  }

  type Mutation {
    login(username: String!, password: String!): User
    signup(username: String!, password: String!): User
  }
`;

module.exports = typeDefs;