let bcrypt = require('bcrypt');

const temp_user = {
  _id: 1,
  email: "Test@gmail.com",
  username: "Test"
}

const resolvers = {
  Query: {
    currentUser: () => temp_user
  },

  Mutation : {
    login: (root, { username, password }) => {
      return temp_user;
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