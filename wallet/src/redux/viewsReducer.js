import VIEWS from '../views'

const defaultState = {
  index: VIEWS.APP_LOGIN,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'VIEWS.SET_VIEW': {
      return {
        ...state,
        index: action.data,
      }
    }

    default: {
      return state
    }
  }
}
