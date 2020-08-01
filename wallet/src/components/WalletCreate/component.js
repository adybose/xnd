import React from 'react'
import { Button, Input, Grid } from 'semantic-ui-react'

import Confetti from 'react-dom-confetti'

import CardHeader from '../CardHeader'
import VIEWS from '../../views'

const makeItRainConfig = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: '10px',
  height: '10px',
  perspective: '500px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
}

const WalletCreate = (props) => (
  <>
    <CardHeader
      text={`Create new ${props.account.currency} wallet`}
      previous={VIEWS.CURRENCY_SELECT}
    />

    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Input
            fluid
            label={props.account.ticker === 'ETH' ? 'private key' : 'seed'}
            labelPosition="left"
            size="small"
            action={{
              color: 'teal',
              icon: 'copy',
            }}
            defaultValue={props.account.keyMaterial}
            readOnly
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Input
            fluid
            label={`0 ${props.account.ticker}`}
            labelPosition="left"
            size="small"
            action={{
              color: 'teal',
              icon: 'copy',
            }}
            defaultValue={props.account.address}
            readOnly
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid columns={2}>
      <Grid.Column verticalAlign="middle" floated="left" textAlign="left">
        <h5
          style={{ color: '#FFF' }}
          onClick={() => props.setView(VIEWS.WALLET_UNLOCK)}
        >
          Unlock wallet
        </h5>
      </Grid.Column>
      <Grid.Column>
        <Button
          size="medium"
          style={{
            background: 'linear-gradient(90deg,#ff3600,#ff8100)',
            color: '#FFF',
          }}
          floated="right"
          onClick={() => props.setRaining(!props.preferences.raining)}
        >
          Make it rain
          <Confetti
            active={props.preferences.raining}
            config={makeItRainConfig}
          />
        </Button>
      </Grid.Column>
    </Grid>
  </>
)

export default WalletCreate
