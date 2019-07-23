const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    currentUser: User
  }

  type User {
    _id: String
    email: String
    username: String
  }

  type Mutation {
    login(username: String!, password: String!): String!
    signup(email: String!, username: String!, password: String!): User!
  }
`;

module.exports = typeDefs;