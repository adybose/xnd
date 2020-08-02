import { combineReducers } from 'redux'

import viewsReducer from './viewsReducer'
import preferencesReducer from './preferencesReducer'
import accountReducer from './accountReducer'
import transferReducer from './transferReducer'

const reducer = combineReducers({
  views: viewsReducer,
  preferences: preferencesReducer,
  account: accountReducer,
  transfer: transferReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined
  }

  return reducer(state, action)
}

export default rootReducer
