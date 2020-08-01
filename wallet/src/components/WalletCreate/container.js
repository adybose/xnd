import { connect } from 'react-redux'

import component from './component'
import { setView, setRaining } from './actions'

const mapStateToProps = (state) => ({
  preferences: state.preferences,
  account: state.account,
})

const mapDispatchToProps = (dispatch) => ({
  setView: (index) => dispatch(setView(index)),
  setRaining: (raining) => dispatch(setRaining(raining)),
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
