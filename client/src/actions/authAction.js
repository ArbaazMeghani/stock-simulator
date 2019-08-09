export const updateTokenAction = (token) => dispatch => {
  dispatch({
    type: 'AUTH_TOKEN',
    payload: token
  });
}

export const beginAuthAction = (authInfo) => dispatch => {
  dispatch({
    type: 'BEGIN_AUTH',
    payload: authInfo
  });
}