const defaultState = {
  address: null,
  network: null,
  currency: null,
  environment: null,

  raining: false,
  message: {
    error: null,
    success: null,
    header: null,
    content: null,
  },
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'PREFERENCES.SET_CURRENCY': {
      return {
        ...state,
        currency: action.data,
      }
    }

    case 'PREFERENCES.SET_ADDRESS': {
      return {
        ...state,
        ...action.data, // set address, network, currency, and environment
      }
    }

    case 'PREFERENCES.SET_RAINING': {
      return {
        ...state,
        raining: action.data,
      }
    }

    case 'PREFERENCES.SET_MESSAGE': {
      return {
        ...state,
        message: action.data,
      }
    }

    default: {
      return state
    }
  }
}
