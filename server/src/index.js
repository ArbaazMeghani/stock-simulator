let express = require('express');
let keys = require('../config/keys');
let mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
let typeDefs = require('./typeDefs/typeDefs');
let resolvers = require('./resolvers/resolvers');
let usersModel = require('./models/User');
let jwt = require('jsonwebtoken');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

const SECRET = 'ab934iowjefldfpos90wqopkdlszj93iolajsf8ew930wl';

const addUser = async (req, res) => {
  const token = req.headers.authentication;
  try {
    const { user } = await jwt.verify(token, SECRET);
    req.user = user;
  }
  catch(err) {
    console.log(err);
  }

  res.next();
};

const app = express();
app.use(addUser);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: req => {
    return {
      usersModel,
      SECRET,
      user: req.user
    };
  }
});

server.applyMiddleware({ app });

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Running GraphQL Server on localhost:${port}${server.graphqlPath}`));