export const updateTokenAction = (token) => dispatch => {
  dispatch({
    type: 'AUTH_TOKEN',
    payload: token
  });
}

export const beginAuthAction = (authInfo) => dispatch => {
  dispatch({
    type: 'BEING_AUTH',
    payload: authData
  });
}