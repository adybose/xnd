import { RippleAPI } from 'ripple-lib'
import { getRippleAddressFromSeed } from './createAccount'

const xndVaultAddress = 'rsYxxMnFu5S4x17GffVMiqrqZcgC9GiLnd'

const instructions = { maxLedgerVersionOffset: 5 }

export const sendXRP = async (seed, amount) => {
  const fromAddress = getRippleAddressFromSeed(seed)

  const payment = {
    source: {
      address: fromAddress,
      maxAmount: {
        value: amount.toString(),
        currency: 'XRP',
      },
    },
    destination: {
      address: xndVaultAddress,
      amount: {
        value: amount.toString(),
        currency: 'XRP',
      },
    },
  }

  const api = new RippleAPI({
    //server: 'wss://s1.ripple.com'                 // MAINNET
    server: 'wss://s.altnet.rippletest.net:51233', // TESTNET
  })

  await api.connect()
  console.log('Connected to rippled...')
  const prepared = await api.preparePayment(fromAddress, payment, instructions)

  const { signedTransaction, id } = api.sign(prepared.txJSON, seed)

  const result = await api.submit(signedTransaction)
  console.log(JSON.stringify(result, null, 2))

  api.disconnect()

  return id
}
