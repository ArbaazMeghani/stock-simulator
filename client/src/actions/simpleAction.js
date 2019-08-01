export const simpleAction = (symbol) => dispatch => {
  dispatch({
   type: 'SET_SYMBOL',
   payload: symbol
  });
 }