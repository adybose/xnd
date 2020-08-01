const defaultState = {
  address: null,
  network: null,
  code: null,
  currency: null,
  environment: null,
  ticker: null,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ACCOUNT.SET_CODE': {
      return {
        ...state,
        code: action.data,
      }
    }

    case 'ACCOUNT.SET_ADDRESS': {
      // Set address, code, network, currency, ticker, and environment
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
