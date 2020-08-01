import { connect } from 'react-redux'

import component from './component'
import { setView, setCode } from './actions'

const mapStateToProps = (state) => ({
  account: state.account,
})

const mapDispatchToProps = (dispatch) => ({
  setView: (index) => dispatch(setView(index)),
  setCode: (code) => dispatch(setCode(code)),
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
