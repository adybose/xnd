import { XrplNetwork } from 'xpring-js'

const networks = {
  ethereum: {
    mainnet: 'eth-mainnet',
    testnet: 'eth-goerli',
  },
  ripple: {
    mainnet: `xrpl-${XrplNetwork.Main}`,
    testnet: `xrpl-${XrplNetwork.Test}`,
  },
}

export default networks
