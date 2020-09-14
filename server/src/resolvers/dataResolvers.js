let axios = require('axios');

const dataResolvers = {
  Mutation: {
    retrieveStockData: async (root, { symbol }) => {
      historic = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${symbol}&apikey=demo`);
      current = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=demo`);
      // console.log(historic.data);
      const globalQuote = current.data['Global Quote'];
      console.log(historic);
      return {
        symbol: globalQuote['01. symbol'],
        price: globalQuote['05. price'],
        open: globalQuote['02. open'],
        close: globalQuote['08. previous close'],
        volume: globalQuote['06. volume']
      }
    }
  }
}

module.exports = dataResolvers;