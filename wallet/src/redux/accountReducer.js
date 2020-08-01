const defaultState = {
  address: null,
  network: null,
  currency: null,
  environment: null,
  ticker: null,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ACCOUNT.SET_CURRENCY': {
      return {
        ...state,
        currency: action.data,
      }
    }

    case 'ACCOUNT.SET_ADDRESS': {
      // Set address, network, currency, ticker, and environment
      return {
        ...state,
        ...action.data,
      }
    }

    default: {
      return state
    }
  }
}
