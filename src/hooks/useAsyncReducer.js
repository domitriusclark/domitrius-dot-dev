import React from 'react';

export default function useAsyncReducer(reducer, initState) {
  const [state, setState] = React.useState(initState),
    dispatchState = async (action) => setState(await reducer(state, action));
  return [state, dispatchState];
}
