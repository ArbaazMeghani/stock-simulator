let express = require('express');
let keys = require('../config/keys');
let mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');
let typeDefs = require('./typeDefs/typeDefs');
let resolvers = require('./resolvers/resolvers');
let usersModel = require('./models/User');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

const SECRET = 'ab934iowjefldfpos90wqopkdlszj93iolajsf8ew930wl';

const server = new ApolloServer({ typeDefs, resolvers, context: {usersModel, SECRET} });
const app = express();
server.applyMiddleware({ app });

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Running GraphQL Server on localhost:${port}${server.graphqlPath}`));