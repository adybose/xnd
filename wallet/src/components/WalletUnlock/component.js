import React from 'react'
import { Button, Form, Grid, Input } from 'semantic-ui-react'

import CardHeader from '../CardHeader'

const WalletUnlock = (props) => (
  <>
    <CardHeader text="Access your account" />
    <Grid>
      <Grid.Row>
        <Grid.Column
          textAlign="left"
          style={{ color: '#FFF', fontSize: '0.9rem' }}
        >
          Unlock your {props.preferences.currency} wallet on the{' '}
          {props.preferences.environment} network.
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Input
            fluid
            label={`0 ${props.preferences.ticker}`}
            labelPosition="left"
            size="small"
            action={{
              color: 'teal',
              icon: 'copy',
            }}
            defaultValue={props.preferences.address}
            readOnly
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Form.Input fluid placeholder="Enter seed" size="large" />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
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
      </Grid.Row>
    </Grid>
  </>
)

export default WalletUnlock
