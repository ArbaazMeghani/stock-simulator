export default (state = {symbol: "AAPL"}, action) => {
  switch (action.type) {
   case 'SET_SYMBOL':
    return {
     symbol: action.payload
    };
   default:
    return state;
  }
}