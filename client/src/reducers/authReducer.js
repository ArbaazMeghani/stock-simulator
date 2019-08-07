export default (
    state = {
      token: undefined,
      show: false,
      title: '',
      formType: 0
    },
    action
  ) => {
  switch (action.type) {
    case 'AUTH_TOKEN':
      return {
        token: action.payload
      };
    case 'BEGIN_AUTH':
      return {
        show: action.show,
        title: action.title,
        formType: action.formType
      }
    default:
      return state;
  }
}