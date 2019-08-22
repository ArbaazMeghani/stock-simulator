const watchListResolvers = {
  Mutation: {
    addToWatchList: async (root, { symbol }, { user }) => {
      return true
    },

    removeFromWatchList: async (root, { symbol }, { user }) => {
      return true
    }
  }
}