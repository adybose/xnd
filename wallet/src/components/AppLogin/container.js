import { connect } from 'react-redux'

import component from './component'
import { setView, getAuthenticationToken } from './actions'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  setView: (index) => dispatch(setView(index)),
  getAuthenticationToken: (code) => dispatch(getAuthenticationToken(code)),
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
