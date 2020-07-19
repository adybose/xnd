export const setView = (index) => ({
  type: 'VIEWS.SET_VIEW',
  data: index,
})

export const setCurrency = (ticker) => ({
  type: 'PREFERENCES.SET_CURRENCY',
  data: ticker,
})
