import baseAction from './baseAction';

export const updateTokenAction = (token) => dispatch => {
  baseAction('AUTH_TOKEN', token, dispatch);
}

export const beginAuthAction = (authInfo) => dispatch => {
  baseAction('BEGIN_AUTH', authInfo, dispatch);
}

export const saveUserAction = (user) => dispatch => {
  baseAction('SAVE_USER', user, dispatch);
}

export const addSymbolToWatchList = (symbol) => dispatch => {
  baseAction('ADD_TO_WATCHLIST', symbol, dispatch);
}

export const removeSymbolFromWatchList = (symbol) => dispatch => {
  baseAction('REMOVE_FROM_WATCHLIST', symbol, dispatch);
}