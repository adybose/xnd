import { connect } from 'react-redux'

import component from './component'
import { setPayId, setFrom, setTo, setRate } from './actions'

const mapStateToProps = (state) => ({
  account: state.account,
  preferences: state.preferences,
  transfer: state.transfer,
})

const mapDispatchToProps = (dispatch) => ({
  setPayId: (payId) => dispatch(setPayId(payId)),
  setFrom: (from) => dispatch(setFrom(from)),
  setTo: (to) => dispatch(setTo(to)),
  setRate: (payId, from) => dispatch(setRate(payId, from)),
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
