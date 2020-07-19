import { connect } from 'react-redux'

import component from './component'

const mapStateToProps = (state) => ({
  views: state.views,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(component)
