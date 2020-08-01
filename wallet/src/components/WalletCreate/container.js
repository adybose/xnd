import { connect } from 'react-redux'

import component from './component'
import { setView, setCelebrations } from './actions'

const mapStateToProps = (state) => ({
  preferences: state.preferences,
  account: state.account,
})

const mapDispatchToProps = (dispatch) => ({
  setView: (index) => dispatch(setView(index)),
  setCelebrations: (willCelebrate) => dispatch(setCelebrations(willCelebrate)),
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
