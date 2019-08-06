export const authAction = (token) => dispatch => {
  dispatch({
    type: 'AUTH_TOKEN',
    payload: token
  });
}