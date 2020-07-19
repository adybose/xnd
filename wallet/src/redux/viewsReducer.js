import VIEWS from '../views'

const previousIndexes = {
  [VIEWS.WALLET_UNLOCK]: -1,
  [VIEWS.CURRENCY_SELECT]: VIEWS.WALLET_UNLOCK,
  [VIEWS.WALLET_CREATE]: VIEWS.CURRENCY_SELECT,
}

const defaultState = {
  index: VIEWS.WALLET_UNLOCK,
  previousIndex: -1,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'VIEWS.SET_VIEW': {
      const previousIndex = previousIndexes[action.data]

      return {
        ...state,
        index: action.data,
        previousIndex:
          previousIndex !== undefined ? previousIndex : state.index,
      }
    }

    default: {
      return state
    }
  }
}
