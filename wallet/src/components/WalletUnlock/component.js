import React from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'

import CardHeader from '../CardHeader'
import VIEWS from '../../views'

const WalletUnlock = (props) => (
  <>
    <CardHeader text="Access your account" />
    <Form.Input fluid placeholder="Enter seed" size="large" />
    <Grid columns={2}>
      <Grid.Column verticalAlign="middle" floated="left" textAlign="left">
        <h5
          style={{ color: '#FFF' }}
          onClick={() => props.setView(VIEWS.WALLET_CREATE)}
        >
          Create wallet
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
        >
          Unlock Wallet
        </Button>
      </Grid.Column>
    </Grid>
  </>
)

export default WalletUnlock
