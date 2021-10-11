export default function wrapAsync(dispatch) {
  return function (action) {
    if (action instanceof Function) {
      return action(dispatch);
    }
    return dispatch(action);
  };
}
