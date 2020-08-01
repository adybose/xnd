import { combineReducers } from 'redux'

import viewsReducer from './viewsReducer'
import preferencesReducer from './preferencesReducer'
import accountReducer from './accountReducer'

const reducer = combineReducers({
  views: viewsReducer,
  preferences: preferencesReducer,
  account: accountReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined
  }

  return reducer(state, action)
}

export default rootReducer
