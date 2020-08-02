import axios from 'axios'
import { xndBackendUrl, getUser } from '../../globals.js'

import { sendXRP } from '../../crypto/ripple/sender'

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

export const sendTransaction = (props) => async (dispatch) => {
  const hash = await sendXRP(props.account.keyMaterial, props.transfer.from)

  axios
    .post(`${xndBackendUrl}/transfer`, {
      sourceUsername: getUser(),
      destinationPayId: props.transfer.payId,
      amount: props.transfer.from,
      sourceTicker: props.account.ticker,
      destinationTicker: props.transfer.toTicker,
      txHash: hash,
    })
    .catch((error) => {
      dispatch({
        type: 'PREFERENCES.SET_MESSAGE',
        data: {
          error: true,
          header: 'Transaction submission failed!',
          content: error,
        },
      })
      return
    })
    .then((res) => {
      dispatch({
        type: 'PREFERENCES.SET_MESSAGE',
        data: {
          success: true,
          header: 'Transaction submission successful!',
          content: `XRP transaction hash: ${hash}  ETH transaction hash: ${res.data.txHash}.`,
        },
      })
    })
}
