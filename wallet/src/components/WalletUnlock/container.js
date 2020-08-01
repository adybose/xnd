import { connect } from 'react-redux'

import component from './component'

import { setView, setKeyMaterial } from './actions'

const mapStateToProps = (state) => ({
  account: state.account,
})

const mapDispatchToProps = (dispatch) => ({
  setView: (index) => dispatch(setView(index)),
  setKeyMaterial: (keyMaterial) => dispatch(setKeyMaterial(keyMaterial)),
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
