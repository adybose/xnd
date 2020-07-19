const defaultState = {
  currency: null,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'PREFERENCES.SET_CURRENCY': {
      return {
        ...state,
        currency: action.data,
      }
    }

    default: {
      return state
    }
  }
}
