import React from 'react'
import { Button, Form, Grid, Input, Icon } from 'semantic-ui-react'

import CardHeader from '../CardHeader'

const Transfer = (props) => {
  return (
    <>
      <CardHeader text="Transfer" />

      <Grid>
        <Grid.Row>
          <Grid.Column
            textAlign="center"
            style={{ color: '#FFF', fontSize: '1.5rem' }}
          >
            <h1>
              {props.account.balance} {props.account.ticker}
            </h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Form.Input
              fluid
              placeholder="Enter PayID"
              size="massive"
              value={props.transfer.payId}
              onChange={(e) => {
                if (e.target.value.endsWith('$xnd.money')) {
                  props.setRate(e.target.value, props.account.ticker)
                }
                props.setPayId(e.target.value)
              }}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="left">
            <Icon name="arrow down" size="large" inverted />
          </Grid.Column>
          <Grid.Column
            width={5}
            textAlign="left"
            verticalAlign="middle"
            style={{ color: 'white', fontWeight: 'bold' }}
          >
            Amount
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Input
              fluid
              size="massive"
              label="XRP"
              labelPosition="right"
              placeholder="0.0"
              defaultValue={props.transfer.from}
              onChange={(e) => props.setFrom(e.target.value)}
            />
          </Grid.Column>
        </Grid.Row>
        {props.transfer.rate !== null &&
          props.transfer.from !== null &&
          props.transfer.payId !== null && (
            <Grid.Row>
              <Grid.Column textAlign="left" style={{ color: '#FFF' }}>
                Receiver gets {props.transfer.rate * props.transfer.from}{' '}
                {props.transfer.toTicker}.
              </Grid.Column>
            </Grid.Row>
          )}
        <Grid.Row>
          <Grid.Column>
            <Button
              size="medium"
              style={{
                background: 'linear-gradient(90deg,#ff3600,#ff8100)',
                color: '#FFF',
              }}
              floated="right"
              disabled={false}
            >
              XND
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default Transfer
