import { connect } from 'react-redux'

import component from './component'
import { handleMenu } from './actions'

const mapStateToProps = (state) => ({
  views: state.views,
})

const mapDispatchToProps = (dispatch) => ({
  handleMenu: (value) => dispatch(handleMenu(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
