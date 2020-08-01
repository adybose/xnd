const defaultState = {
  celebrations: false,
  message: {
    error: null,
    success: null,
    header: null,
    content: null,
  },
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'PREFERENCES.SET_CELEBRATIONS': {
      return {
        ...state,
        celebrations: action.data,
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
