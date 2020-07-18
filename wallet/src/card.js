import React from 'react'
import { Button, Form, Grid, Header, Segment, Divider } from 'semantic-ui-react'

const WalletForm = () => (
  <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" style={{ color: '#e63946' }} textAlign="center">
        XND
      </Header>
      <Form size="large">
        <Segment style={{ backgroundColor: '#002999', borderRadius: 7 }} raised padded>
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
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
)

export default WalletForm
