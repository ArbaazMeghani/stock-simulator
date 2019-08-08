export const updateTokenAction = (token) => dispatch => {
  dispatch({
    type: 'AUTH_TOKEN',
    payload: token
  });
}

export const beginAuthAction = (authInfo) => dispatch => {
  console.log(authInfo);
  dispatch({
    type: 'BEGIN_AUTH',
    payload: authInfo
  });
}