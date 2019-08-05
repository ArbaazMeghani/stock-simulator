export default (state = {token: undefined}, action) => {
  switch (action.type) {
   case 'AUTH_TOKEN':
    return {
     token: action.payload
    };
   default:
    return state;
  }
}