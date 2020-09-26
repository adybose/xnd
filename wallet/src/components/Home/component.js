import React from 'react'
import {
  Button,
  Form,
  Grid,
  Input,
  Icon,
  Segment,
  Header,
} from 'semantic-ui-react'

import CardHeader from '../CardHeader'

const Home = (props) => {
  return (
    <>
      <CardHeader text="Home" />

      <Grid>
        <Grid.Row>
          <Grid.Column
              textAlign="left"
              style={{ color: '#FFF', fontSize: '1.5rem' }}
          >
            <h1>
              Balance:
            </h1>
          </Grid.Column>
          <Grid.Column
            textAlign="right"
            style={{ color: '#FFF', fontSize: '1.5rem' }}
          >
            <h1>
              {props.account.balance} {props.account.ticker}
            </h1>
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
              floated="center"
              disabled={false}
              onClick={() => props.setView(VIEWS.TRANSACTIONS)}
            >
              Transactions
            </Button>
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
              floated="center"
              disabled={false}
              onClick={() => props.setView(VIEWS.TRANSFER)}
            >
              Transfer
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default Home
