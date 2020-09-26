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

const Transactions = (props) => {
  return (
    <>
      <CardHeader text="Transactions" />

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
            <List celled>
              <List.Item>
                <Icon name="arrow" size="large" inverted />
                <List.Content>
                  <List.Header>10 ETH</List.Header>
                  1 minute ago
                </List.Content>
              </List.Item>
              <List.Item>
                <Icon name="arrow" size="large" inverted />
                <List.Content>
                  <List.Header>5 ETH</List.Header>10 minutes ago
                </List.Content>
              </List.Item>
              <List.Item>
                <Icon name="arrow" size="large" inverted />
                <List.Content>
                  <List.Header>3 ETH</List.Header>
                  20 minutes ago
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </>
  )
}

export default Transactions
