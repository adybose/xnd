export const setView = (index) => ({
  type: 'VIEWS.SET_VIEW',
  data: index,
})

export const setRaining = (raining) => ({
  type: 'PREFERENCES.SET_RAINING',
  data: raining,
})
