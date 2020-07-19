import { combineReducers } from 'redux'

import viewsReducer from './viewsReducer'

const reducer = combineReducers({
  views: viewsReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined
  }

  return reducer(state, action)
}

export default rootReducer
