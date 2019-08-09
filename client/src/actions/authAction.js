import baseAction from './baseAction';

export const updateTokenAction = (token) => dispatch => {
  baseAction('AUTH_TOKEN', token, dispatch);
}

export const beginAuthAction = (authInfo) => dispatch => {
  baseAction('BEGIN_AUTH', authInfo, dispatch);
}

export const userInfoAction = (userInfo) => dispatch => {
  baseAction('USER_INFO', userInfo, dispatch);
}