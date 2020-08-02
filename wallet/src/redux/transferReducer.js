const defaultState = {
  payId: null,
  from: null,
  to: null,
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

    default: {
      return state
    }
  }
}
