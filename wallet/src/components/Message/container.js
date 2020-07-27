import { connect } from 'react-redux'

import component from './component'
import { clearMessage } from './actions'

const mapStateToProps = (state) => ({
  error: state.preferences.message.error,
  success: state.preferences.message.success,
  header: state.preferences.message.header,
  content: state.preferences.message.content,
  visible: state.preferences.message.header !== null,
})

const mapDispatchToProps = (dispatch) => ({
  clearMessage: () => dispatch(clearMessage()),
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
