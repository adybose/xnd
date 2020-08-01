export const setView = (index) => ({
  type: 'VIEWS.SET_VIEW',
  data: index,
})

export const setKeyMaterial = (keyMaterial) => ({
  type: 'ACCOUNT.SET_KEY_MATERIAL',
  data: keyMaterial,
})
