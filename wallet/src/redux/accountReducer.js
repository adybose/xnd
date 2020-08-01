const defaultState = {
  address: null,
  network: null,
  code: null,
  currency: null,
  environment: null,
  ticker: null,
  keyMaterial: null, // seed or private key, depending on the currency
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ACCOUNT.SET_CODE': {
      return {
        ...state,
        code: action.data,
      }
    }

    case 'ACCOUNT.SET_KEY_MATERIAL': {
      return {
        ...state,
        keyMaterial: action.data,
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
