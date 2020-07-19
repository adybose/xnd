import VIEWS from '../views'

const defaultState = {
  index: VIEWS.WALLET_UNLOCK,
  previousIndex: -1,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'VIEWS.SET_VIEW': {
      return {
        ...state,
        index: action.data,
        previousIndex: state.index,
      }
    }

    default: {
      return state
    }
  }
}
