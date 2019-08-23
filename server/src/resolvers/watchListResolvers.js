const watchListResolvers = {
  Mutation: {
    addToWatchList: async (root, { symbol }, { usersModel, user }) => {
      const existingUser = await usersModel.findOne({username: user.username});

      if(!existingUser) {
        throw new Error("User not found");
      }

      existingUser.watchList.push(symbol);

      existingUser.save();
      return true
    },

    removeFromWatchList: async (root, { symbol }, { usersModel, user }) => {
      const existingUser = await usersModel.findOne({username: user.username});

      if(!existingUser) {
        throw new Error("User not found");
      }

      existingUser.watchList = existingUser.watchList.filter(item => {
        return item != symbol;
      });

      existingUser.save();
      return true
    }
  }
}

module.exports = watchListResolvers