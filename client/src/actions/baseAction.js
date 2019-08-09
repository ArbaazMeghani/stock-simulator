export default function baseAction(type, payload, dispatch) {
  dispatch({
    type: type,
    payload: payload
  });
}
