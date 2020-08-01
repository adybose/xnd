import { connect } from 'react-redux'

import component from './component'
import { setView, setCode, createAccount } from './actions'

const mapStateToProps = (state) => ({
  account: state.account,
})

const mapDispatchToProps = (dispatch) => ({
  setView: (index) => dispatch(setView(index)),
  setCode: (code) => dispatch(setCode(code)),
  createAccount: (code) => dispatch(createAccount(code)),
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
