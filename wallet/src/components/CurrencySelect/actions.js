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

  dispatch({
    type: 'ACCOUNT.INIT',
    data: {
      address: keyPair.address,
      network: codeToNetwork(code),
      code: code,
      currency: codeToCurrency(code),
      environment: codeToEnvironment(code),
      ticker: codeToTicker(code),
      keyMaterial: keyPair.keyMaterial,
      balance: '0',
    },
  })

  dispatch(setView(views.WALLET_CREATE))
}

const codeToCurrency = (code) => {
  switch (code) {
    case 'xrpl':
      return 'Ripple'
    case 'eth':
      return 'Ethereum'

    default:
      return {}
  }
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

const codeToEnvironment = (code) => {
  switch (code) {
    case 'xrpl':
      return 'TESTNET'
    case 'eth':
      return 'GOERLI'

    default:
      return {}
  }
}

const codeToTicker = (code) => {
  switch (code) {
    case 'xrpl':
      return 'XRP'
    case 'eth':
      return 'ETH'
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
