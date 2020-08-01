export const setView = (index) => ({
  type: 'VIEWS.SET_VIEW',
  data: index,
})

export const setCelebrations = (willCelebrate) => async (dispatch) => {
  dispatch({
    type: 'PREFERENCES.SET_CELEBRATIONS',
    data: willCelebrate,
  })
}
