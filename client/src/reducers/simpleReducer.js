export default (state = {symbol: "AAPL", data: {}}, action) => {
  switch (action.type) {
   case 'SET_SYMBOL':
    return {
     symbol: action.payload,
     data: state.data
    };
   case 'UPDATE_STOCK_DATA':
     return {
      symbol: state.symbol,
      data: action.payload
     }
   default:
    return state;
  }
}