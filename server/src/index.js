let express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello World!'
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Running GraphQL Server on localhost:${port}${server.graphqlPath}`));