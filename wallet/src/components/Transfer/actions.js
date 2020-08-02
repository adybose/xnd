export const setPayId = (payId) => ({
  type: 'TRANSFER.SET_PAYID',
  data: payId,
})

export const setFrom = (from) => ({
  type: 'TRANSFER.SET_FROM',
  data: parseFloat(from),
})

export const setTo = (to) => ({
  type: 'TRANSFER.SET_TO',
  data: parseFloat(to),
})
