import baseAction from './baseAction';

export const simpleAction = (symbol) => dispatch => {
  baseAction('SET_SYMBOL', symbol, dispatch);
}

export const updateStockData = (stockData) => dispatch => {
  baseAction('UPDATE_STOCK_DATA', stockData, dispatch);
}