import { connect } from 'react-redux'

import component from './component'
import { setView } from './actions'

const mapStateToProps = (state) => ({
  views: state.views,
})

const mapDispatchToProps = (dispatch) => ({
  setView: (index) => dispatch(setView(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
