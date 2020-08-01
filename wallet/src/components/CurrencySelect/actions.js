export const setView = (index) => ({
  type: 'VIEWS.SET_VIEW',
  data: index,
})

export const setCode = (code) => ({
  type: 'ACCOUNT.SET_CODE',
  data: code,
})

export const createAccount = (code) => (dispatch) => {
  dispatch({
    type: 'ACCOUNT.INIT',
    data: {},
  })
}
