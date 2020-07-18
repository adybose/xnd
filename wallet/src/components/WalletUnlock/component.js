import React from 'react'
import { Button, Form, Grid, Header, Divider } from 'semantic-ui-react'

const WalletUnlock = () => (
  <>
    <Header as="h4" style={{ color: 'white' }} textAlign="center">
      Access your account
    </Header>
    <Divider />

    <Form.Input fluid placeholder="Enter seed" size="large" />
    <Grid columns={2}>
      <Grid.Column verticalAlign="middle" floated="left" textAlign="left">
        <h5 style={{ color: '#FFF' }}>Create wallet</h5>
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
