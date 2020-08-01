import { generateSeed, deriveKeypair, deriveAddress } from 'ripple-keypairs'

const createAccount = () => {
  const seed = generateSeed()
  const keypair = deriveKeypair(seed)
  const address = deriveAddress(keypair.publicKey)

  return {
    keyMaterial: seed,
    address: address,
  }
}

export default createAccount
