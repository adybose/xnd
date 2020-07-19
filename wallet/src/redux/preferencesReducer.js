const defaultState = {
  currency: null,
  raining: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'PREFERENCES.SET_CURRENCY': {
      return {
        ...state,
        currency: action.data,
      }
    }

    case 'PREFERENCES.SET_RAINING': {
      return {
        ...state,
        raining: action.data,
      }
    }

    default: {
      return state
    }
  }
}
