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
    signup: (root, { email, username, password }) => {
      return temp_user; 
    },
  },
};

module.exports = resolvers;