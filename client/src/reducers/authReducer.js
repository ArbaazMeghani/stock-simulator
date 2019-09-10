const defaultState = {
  show: false,
  title: '',
  formType: 0,
  user: undefined
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'BEGIN_AUTH':
      return {
        show: action.payload.show,
        title: action.payload.title,
        formType: action.payload.formType
      };
    case 'SAVE_USER':
      return {
        user: action.payload
      };
    case 'ADD_TO_WATCHLIST':
      state.user.watchList.push(action.payload);
      return {
        user: {
         ...state.user
        }
      }
    case "REMOVE_FROM_WATCHLIST":
      state.user.watchList = state.user.watchList.filter(item => {
        return item !== action.payload;
      });
      return {
        user: {
          ...state.user
        }
      }
    case 'BUY_STOCK':
      return state;
    case "SELL_STOCK":
      return state;
    default:
      return state;
  }
}