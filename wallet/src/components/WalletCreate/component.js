import React from 'react'
import { Button, Input, Grid } from 'semantic-ui-react'

import CardHeader from '../CardHeader'
import VIEWS from '../../views'

const WalletCreate = (props) => (
  <>
    <CardHeader text={`Create new ${props.preferences.currency} wallet`} />

    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Input
            fluid
            label="Seed"
            labelPosition="left"
            size="small"
            action={{
              color: 'teal',
              icon: 'copy',
            }}
            defaultValue="ssrNYjaoTWcMhqvvGP3dNSoHgKi99"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Input
            fluid
            label={`0 ${props.preferences.currency}`}
            labelPosition="left"
            size="small"
            action={{
              color: 'teal',
              icon: 'copy',
            }}
            defaultValue="rhx2aB9R5NtFhaZLwfFdRZgqPiCmin9fPt"
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
        >
          Make it rain
        </Button>
      </Grid.Column>
    </Grid>
  </>
)

export default WalletCreate
