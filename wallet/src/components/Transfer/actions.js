import axios from 'axios'
import { xndBackendUrl } from '../../globals.js'

export const setPayId = (payId) => ({
  type: 'TRANSFER.SET_PAYID',
  data: payId,
})

export const setFrom = (from) => ({
  type: 'TRANSFER.SET_FROM',
  data: from === null || from === '' ? null : parseFloat(from),
})

export const setTo = (to) => ({
  type: 'TRANSFER.SET_TO',
  data: to === null || to === '' ? null : parseFloat(to),
})

export const setRate = (destinationPayId, from) => (dispatch) => {
  const user = destinationPayId.split('$')[0]

  axios
    .get(`${xndBackendUrl}/${user}`)
    .catch((error) => {
      dispatch({
        type: 'PREFERENCES.SET_MESSAGE',
        data: {
          error: true,
          header: 'Could not fetch destination PayID',
          content: error,
        },
      })
      return
    })
    .then((response) => {
      return response.data.ticker
    })
    .then((ticker) => {
      axios.get(`${xndBackendUrl}/rate/${from}/${ticker}`).then((response) => {
        dispatch({
          type: 'TRANSFER.SET_RATE',
          data: response.data.rate,
        })

        dispatch({
          type: 'TRANSFER.SET_TO_TICKER',
          data: ticker,
        })
      })
    })
}
