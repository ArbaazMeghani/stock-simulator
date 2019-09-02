let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
let lodash = require('lodash');

const authResolvers = {
  Query: {
    currentUser: async (root, args, { usersModel, user }) => {
      const existingUser = await usersModel.findOne({username: user.username});

      if(!existingUser) {
        throw new Error('No User Found');
      }

      return existingUser;
    },

    clearUser: async (root, args, { usersModel, user }) => {
      const existingUser = await usersModel.findOne({username: user.username});

      if(!existingUser) {
        throw new Error('No User Found');
      }

      existingUser.watchList = [];
      existingUser.stocks = [];

      existingUser.save();

      return existingUser;
    }
  },

  Mutation : {
    login: async (root, { username, password }, { usersModel, SECRET }) => {
      const user = await usersModel.findOne({ username });
      if(!user) {
        throw new Error('Invalid username or password');
      }

      const validUser = await bcrypt.compare(password, user.password);
      if(!validUser) {
        throw new Error('Invalid username or password');
      }
      
      const token = jwt.sign(
        {
          user: lodash.pick(user, ['_id', 'username', 'watchList', 'stocks'])
        },
        SECRET,
        {
          expiresIn: '1y'
        });
      
      return token;
    },
    signup: async (root, { email, username, password }, { usersModel }) => {
      const existingUser = await usersModel.findOne().or([ { email }, {username} ]);

      if (existingUser) {
        throw new Error('Email or username already in use');
      }
      
      const hash = await bcrypt.hash(password, 10);
      const user = await new usersModel({
        email,
        username,
        password: hash
      }).save();

      return user; 
    },
  },
};

module.exports = authResolvers;