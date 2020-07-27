import React from 'react'

import Card from '../Card'

import AppLogin from '../AppLogin'
import WalletCreate from '../WalletCreate'
import WalletUnlock from '../WalletUnlock'
import CurrencySelect from '../CurrencySelect'

import Views from '../../views'

import Message from '../Message'

function App(props) {
  return (
    <>
      <Card>
        {props.views.index === Views.APP_LOGIN ? <AppLogin /> : null}
        {props.views.index === Views.CURRENCY_SELECT ? (
          <CurrencySelect />
        ) : null}
        {props.views.index === Views.WALLET_UNLOCK ? <WalletUnlock /> : null}
        {props.views.index === Views.WALLET_CREATE ? <WalletCreate /> : null}
      </Card>
      <Message />
    </>
  )
}

export default App
