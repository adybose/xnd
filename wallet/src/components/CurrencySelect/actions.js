import axios from 'axios'

import { xndBackendUrl, getUser } from '../../globals.js'

import views from '../../views'
import networks from '../../crypto/networks'
import createRippleAccount from '../../crypto/ripple/createAccount'

export const setView = (index) => ({
  type: 'VIEWS.SET_VIEW',
  data: index,
})

export const setCode = (code) => ({
  type: 'ACCOUNT.SET_CODE',
  data: code,
})

export const createAccount = (code) => (dispatch) => {
  const keyPair = generateKeyPair(code)

  axios
    .post(`${xndBackendUrl}/${getUser()}`, {
      address: keyPair.address,
      network: codeToNetwork(code),
    })
    .then((res) => {
      dispatch({
        type: 'ACCOUNT.INIT',
        data: {
          ...res.data,
          keyMaterial: keyPair.keyMaterial,
        },
      })
    })
    .catch((error) => {
      console.error(error)
      dispatch({
        type: 'PREFERENCES.SET_MESSAGE',
        data: {
          error: true,
          header: 'Failed to link address with PayID',
          content: error,
        },
      })
      return
    })

  dispatch(setView(views.WALLET_CREATE))
}

const codeToNetwork = (code) => {
  switch (code) {
    case 'xrpl':
      return networks.ripple.testnet
    case 'eth':
      return networks.ethereum.testnet

    default:
      return {}
  }
}

const generateKeyPair = (code) => {
  switch (code) {
    case 'xrpl':
      return createRippleAccount()
    case 'eth':
      return {}
    default:
      return {}
  }
}
