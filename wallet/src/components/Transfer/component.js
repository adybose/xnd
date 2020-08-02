import React, { Component } from 'react'
import { Button, Form, Grid, Input, Icon } from 'semantic-ui-react'

import CardHeader from '../CardHeader'

class Transfer extends Component {
  getReceiverAmount = () => {
    const amount = this.props.transfer.rate * this.props.transfer.from
    return amount.toString().trimRight('0').trimRight('.')
  }

  render = () => {
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
                {this.props.account.balance} {this.props.account.ticker}
              </h1>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Form.Input
                fluid
                placeholder="Enter PayID"
                size="massive"
                value={this.props.transfer.payId}
                onChange={(e) => {
                  if (e.target.value.endsWith('$xnd.money')) {
                    this.props.setRate(
                      e.target.value,
                      this.props.account.ticker
                    )
                  }
                  this.props.setPayId(e.target.value)
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
                label={this.props.account.ticker}
                labelPosition="right"
                placeholder="0.0"
                defaultValue={this.props.transfer.from}
                onChange={(e) => this.props.setFrom(e.target.value)}
              />
            </Grid.Column>
          </Grid.Row>
          {this.props.transfer.rate !== null &&
            this.props.transfer.from !== null &&
            this.props.transfer.payId !== null && (
              <Grid.Row>
                <Grid.Column textAlign="left" style={{ color: '#FFF' }}>
                  Receiver gets {this.getReceiverAmount()}{' '}
                  {this.props.transfer.toTicker}.
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
}

export default Transfer
