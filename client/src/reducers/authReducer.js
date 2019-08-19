const defaultState = {
  token: undefined,
  show: false,
  title: '',
  formType: 0,
  user: undefined
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'AUTH_TOKEN':
      return {
        token: action.payload
      };
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
    default:
      return state;
  }
}