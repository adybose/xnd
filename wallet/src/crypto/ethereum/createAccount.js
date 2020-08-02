import Web3 from 'web3'

const web3 = new Web3(
  Web3.givenProvider ||
    'wss://goerli.infura.io/ws/v3/f1883ca3af324620a3bba3385d1249da'
)

export const createEthereumAccount = () => {
  const account = web3.eth.accounts.create()

  return {
    keyMaterial: account.privateKey,
    address: account.address,
  }
}

export const getEthereumAddressFromPrivateKey = (key) => {
  try {
    const account = web3.eth.accounts.privateKeyToAccount(key)
    return account.address
  } catch (e) {
    return null
  }
}
