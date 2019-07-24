let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
let lodash = require('lodash');

const resolvers = {
  Query: {
    currentUser: () => temp_user
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
          user: lodash.pick(user, ['_id', 'username'])
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

module.exports = resolvers;