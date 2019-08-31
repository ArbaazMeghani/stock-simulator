const stockResolvers = {
  Mutation: {
    buyStock: async (root, { symbol, price, quantity }, { usersModel, user }) => {
      const existingUser = await usersModel.findOne({username: user.username});

      if(!existingUser) {
        throw new Error("User not found");
      }

      existingStock = undefined;

      for(let i = 0; i < existingUser.stocks.length; i++) {
        if(existingUser.stocks[i].symbol === symbol) {
          existingStock = existingUser.stocks[i];
        }
      }

      if(existingStock) {
        existingStock.price = ((existingUser.price * existingUser.quantity) + (price * quantity))/2;
        existingStock.quantity += quantity;
      }
      else {
        existingUser.stocks.append({symbol: symbol, price: price, quantity: quantity});
      }

      existingUser.save();
      return true;
    },

    sellStock: async (root, { symbol, price, quantity }, { usersModel, user }) => {

    }
  }
}

module.exports = stockResolvers