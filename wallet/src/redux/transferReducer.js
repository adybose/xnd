const defaultState = {
  payId: null,
  from: null,
  to: null,
  toTicker: null,
  rate: null,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'TRANSFER.SET_PAYID': {
      return {
        ...state,
        payId: action.data,
      }
    }

    case 'TRANSFER.SET_FROM': {
      return {
        ...state,
        from: action.data,
      }
    }

    case 'TRANSFER.SET_TO': {
      return {
        ...state,
        to: action.data,
      }
    }

    case 'TRANSFER.SET_RATE': {
      return {
        ...state,
        rate: action.data,
      }
    }

    case 'TRANSFER.SET_TO_TICKER': {
      return {
        ...state,
        toTicker: action.data,
      }
    }

    default: {
      return state
    }
  }
}
