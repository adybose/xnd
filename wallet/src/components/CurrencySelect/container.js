import { connect } from 'react-redux'

import component from './component'
import { setView, setCurrency } from './actions'

const mapStateToProps = (state) => ({
  account: state.account,
})

const mapDispatchToProps = (dispatch) => ({
  setView: (index) => dispatch(setView(index)),
  setCurrency: (ticker) => dispatch(setCurrency(ticker)),
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
