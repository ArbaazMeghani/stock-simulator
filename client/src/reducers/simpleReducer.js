export default (state = {}, action) => {
  switch (action.type) {
   case 'SET_SYMBOL':
    return {
     result: action.payload
    };
   default:
    return state;
  }
 }