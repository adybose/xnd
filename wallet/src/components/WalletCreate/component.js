import React, { Component } from 'react'
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

class WalletCreate extends Component {
  componentDidUpdate() {
    this.props.account.address &&
      !this.props.preferences.celebrations &&
      this.props.setCelebrations(true)
  }
  render() {
    return (
      <>
        <CardHeader
          text={`Create new ${this.props.account.currency} wallet`}
          previous={VIEWS.CURRENCY_SELECT}
        />

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Input
                fluid
                label={
                  this.props.account.ticker === 'ETH' ? 'private key' : 'seed'
                }
                labelPosition="left"
                size="small"
                action={{
                  color: 'teal',
                  icon: 'copy',
                }}
                defaultValue={this.props.account.keyMaterial}
                readOnly
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Input
                fluid
                label={`0 ${this.props.account.ticker}`}
                labelPosition="left"
                size="small"
                action={{
                  color: 'teal',
                  icon: 'copy',
                }}
                defaultValue={this.props.account.address}
                readOnly
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid>
          <Grid.Column>
            <Button
              size="medium"
              style={{
                background: 'linear-gradient(90deg,#ff3600,#ff8100)',
                color: '#FFF',
              }}
              floated="right"
              onClick={() => {}}
            >
              Unlock Wallet
              <Confetti
                active={this.props.preferences.celebrations}
                config={makeItRainConfig}
              />
            </Button>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}

export default WalletCreate
