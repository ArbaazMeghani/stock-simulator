let express = require('express');
let keys = require('../config/keys');
let mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
let typeDefs = require('./typeDefs/typeDefs');
let resolvers = require('./resolvers/resolvers');
let usersModel = require('./models/User');
let jwt = require('jsonwebtoken');
let cors = require('cors');
let path = require('path');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

const addUser = async (req) => {
  const token = req.headers.authorization;
  try {
    const { user } = await jwt.verify(token, keys.JWT_SECRET);
    req.user = user;
  }
  catch(err) {
    req.user = undefined;
  }

  req.next();
};

const app = express();
app.use(cors());
app.use(addUser);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: req => {
    return {
      usersModel,
      SECRET: keys.JWT_SECRET,
      user: req.user
    };
  }
});

if(process.env.NODE_ENV == 'production') {
  console.log("Running production version");
  app.use(express.static(path.join(__dirname, '../../public')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public', 'index.html'));
  });
}

server.applyMiddleware({ app });

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Running GraphQL Server on localhost:${port}${server.graphqlPath}`));