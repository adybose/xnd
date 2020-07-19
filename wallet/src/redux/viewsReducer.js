import VIEWS from '../views'

const previousIndexes = {
  [VIEWS.CURRENCY_SELECT]: -1,
  [VIEWS.WALLET_UNLOCK]: VIEWS.CURRENCY_SELECT,
  [VIEWS.WALLET_CREATE]: VIEWS.WALLET_UNLOCK,
}

const defaultState = {
  index: VIEWS.CURRENCY_SELECT,
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
