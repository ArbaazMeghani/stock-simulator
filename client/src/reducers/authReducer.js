const defaultState = {
  token: undefined,
  show: false,
  title: '',
  formType: 0,
  username: undefined,
  email: undefined,
  password: undefined
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
    default:
      return state;
  }
}