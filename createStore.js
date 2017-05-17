const createStore = (reducer, initialState) => {
  let state = initialState
  let listeners = []
  const getState = () => state

  const dispatch = action => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  const subscribe = subscriber => {
    listeners = append(subscriber, listeners)
    return () =>
      listeners = listeners.filter(listener => listener != subscriber)
  }

  return {
    getState,
    dispatch,
    subscribe,
  }

}
