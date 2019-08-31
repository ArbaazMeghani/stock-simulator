const stockResolvers = {
  Mutation: {
    buyStock: async (root, { symbol, price, quantity }, { usersModel, user }) => {

    },

    sellStock: async (root, { symbol, price, quantity }, { usersModel, user }) => {
      
    }
  }
}

module.exports = stockResolvers