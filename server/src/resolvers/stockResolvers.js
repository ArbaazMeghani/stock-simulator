const stockResolvers = {
  Mutation: {
    buyStock: async (root, { symbol, price, quantity }, { usersModel, user }) => {
      const existingUser = await usersModel.findOne({username: user.username});

      if(!existingUser) {
        throw new Error("User not found");
      }

      if(price * quantity > existingUser.balance) {
        throw new Error("You cannot afford that");
      }

      existingStock = undefined;

      for(let i = 0; i < existingUser.stocks.length; i++) {
        if(existingUser.stocks[i].symbol === symbol) {
          existingStock = existingUser.stocks[i];
        }
      }

      if(existingStock) {
        existingStock.price = ((existingUser.price * existingUser.quantity) + (price * quantity))/(quantity + existingUser.quantity);
        existingStock.quantity += quantity;
      }
      else {
        existingUser.stocks.push({symbol: symbol, price: price, quantity: quantity});
      }

      existingUser.balance -= quantity * price;

      existingUser.save();
      return true;
    },

    sellStock: async (root, { symbol, price, quantity }, { usersModel, user }) => {
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

      if(!existingStock) {
        throw new Error("Stock now owned");
      }
      else {
        if(existingStock.quantity < quantity) {
          throw new Error("Cannot sell more than you own");
        }
        else {
          existingUser.balance += quantity * price;
          existingStock.quantity -= quantity;
          if(existingStock.quantity == 0) {
            existingUser.stocks = existingUser.stocks.filter(stock => {
              return stock.symbol !== symbol;
            })
          }
        }
      }

      existingUser.save();
      return true;
    }
  }
}

module.exports = stockResolvers;