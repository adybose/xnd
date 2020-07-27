export const clearMessage = () => ({
  type: 'PREFERENCES.SET_MESSAGE',
  data: {
    error: null,
    success: null,
    header: null,
    content: null,
  },
})
