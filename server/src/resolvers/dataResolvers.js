let axios = require('axios');

const dataResolvers = {
  Mutation: {
    retrieveStockData: async (root, { symbol }) => {
      historic = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${symbol}&apikey=demo`);
      current = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=demo`);
      
      const globalQuote = current.data['Global Quote'];
      const historicQuote = historic.data['Monthly Adjusted Time Series']

      let dataPoints = []
      for (var key of Object.keys(historicQuote)) {
        const date = key.split('-')
        dataPoints.push({
          year: date[0],
          month: date[1],
          price: historicQuote[key]['4. close']
        })
      }

      return {
        symbol: globalQuote['01. symbol'],
        price: globalQuote['05. price'],
        open: globalQuote['02. open'],
        close: globalQuote['08. previous close'],
        volume: globalQuote['06. volume'],
        data: dataPoints
      }
    }
  }
}

module.exports = dataResolvers;