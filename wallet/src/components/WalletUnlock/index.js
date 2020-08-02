import { getRippleAddressFromSeed } from '../../crypto/ripple/createAccount'

export { default } from './container'

export const validateSeed = (account) => {
  switch (account.ticker) {
    case 'ETH':
      return false
    case 'XRP': {
      return (
        account.keyMaterial &&
        getRippleAddressFromSeed(account.keyMaterial) === account.address
      )
    }
    default: return false
  }
}
