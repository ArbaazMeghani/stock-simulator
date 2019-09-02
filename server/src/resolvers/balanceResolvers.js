const balanceResolvers = {
  Mutation: {
    addBalance: async (root, { balance }, { usersModel, user }) => {
      const existingUser = await usersModel.findOne({username: user.username});

      if(!existingUser) {
        throw new Error("User not found");
      }

      existingUser.balance += balance;

      existingUser.save();
      return existingUser.balance;
    },

    subtractBalance: async (root, { balance }, { usersModel, user }) => {
      const existingUser = await usersModel.findOne({username: user.username});

      if(!existingUser) {
        throw new Error("User not found");
      }

      existingUser.balance -= balance;

      existingUser.save();
      return existingUser.balance;
    }
  }
}

module.exports = balanceResolvers;