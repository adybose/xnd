import { getRippleAddressFromSeed } from '../../crypto/ripple/createAccount'
import { getEthereumAddressFromPrivateKey } from '../../crypto/ethereum/createAccount'

export { default } from './container'

export const validateSeed = (account) => {
  switch (account.ticker) {
    case 'ETH': {
      return (
        account.keyMaterial &&
        getEthereumAddressFromPrivateKey(account.keyMaterial) ===
          account.address
      )
    }
    case 'XRP': {
      return (
        account.keyMaterial &&
        getRippleAddressFromSeed(account.keyMaterial) === account.address
      )
    }
    default:
      return false
  }
}
