import React from 'react'

import Card from '../Card'
import WalletCreate from '../WalletCreate'
import WalletUnlock from '../WalletUnlock'
import CurrencySelect from '../CurrencySelect'

import Views from '../../views'

function App(props) {
  return (
    <Card>
      {props.views.index === Views.WALLET_UNLOCK ? <WalletUnlock /> : null}
      {props.views.index === Views.CURRENCY_SELECT ? <CurrencySelect /> : null}
      {props.views.index === Views.WALLET_CREATE ? <WalletCreate /> : null}
    </Card>
  )
}

export default App
