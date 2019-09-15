let axios = require('axios');

const dataResolvers = {
  Mutation: {
    retrieveStockData: async (root, { symbol }) => {
      historic = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${symbol}&apikey=demo`);
      current = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=demo`);
      console.log(historic.data);
      console.log(current.data);
      return null;
    }
  }
}

module.exports = dataResolvers;