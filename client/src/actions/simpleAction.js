import baseAction from './baseAction';

export const simpleAction = (symbol) => dispatch => {
  baseAction('SET_SYMBOL', symbol, dispatch);
}