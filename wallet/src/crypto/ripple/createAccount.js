import { generateSeed, deriveKeypair, deriveAddress } from 'ripple-keypairs'

export const createRippleAccount = () => {
  const seed = generateSeed()
  const address = getRippleAddressFromSeed(seed)

  return {
    keyMaterial: seed,
    address: address,
  }
}

export const getRippleAddressFromSeed = (seed) => {
  try {
    const keypair = deriveKeypair(seed)
    return deriveAddress(keypair.publicKey)
  } catch (e) {
    return null
  }
}
