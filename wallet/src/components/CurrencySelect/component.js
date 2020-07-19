import React from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'

import CardHeader from '../CardHeader'
import VIEWS from '../../views'

const currencyOptions = [
  {
    key: 'xrp',
    text: 'Ripple',
    value: 'XRP',
    image: {
      avatar: true,
      src: 'https://cryptoicons.org/api/color/xrp/200/232a2e',
    },
  },
  {
    key: 'btc',
    text: 'Bitcoin',
    value: 'BTC',
    image: {
      avatar: true,
      src: 'https://cryptoicons.org/api/color/btc/200/f7931a ',
    },
  },
  {
    key: 'eth',
    text: 'Ethereum',
    value: 'ETH',
    image: {
      avatar: true,
      src: 'https://cryptoicons.org/api/color/eth/200/2f3030',
    },
  },
]

const CurrencySelect = (props) => (
  <>
    <CardHeader text="Choose your Currency" />
    <Form.Dropdown
      placeholder="Select Currency"
      fluid
      selection
      options={currencyOptions}
    />
    <Grid>
      <Grid.Column>
        <Button
          size="medium"
          style={{
            background: 'linear-gradient(90deg,#ff3600,#ff8100)',
            color: '#FFF',
          }}
          floated="right"
          onClick={() => props.setView(VIEWS.WALLET_CREATE)}
        >
          Next
        </Button>
      </Grid.Column>
    </Grid>
  </>
)

export default CurrencySelect
