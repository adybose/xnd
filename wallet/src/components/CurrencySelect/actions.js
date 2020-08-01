export const setView = (index) => ({
  type: 'VIEWS.SET_VIEW',
  data: index,
})

export const setCurrency = (ticker) => ({
  type: 'ACCOUNT.SET_CURRENCY',
  data: ticker,
})
