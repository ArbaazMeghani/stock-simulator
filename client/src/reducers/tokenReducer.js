const defaultState = {
  token: undefined
}

export default (state, action) => {
  switch (action.type) {
    case 'AUTH_TOKEN':
      return {
        token: action.payload
      };
    default:
      if(state) {
        return state;
      }
      return defaultState;
  }
}