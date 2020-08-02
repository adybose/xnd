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

  keyMaterialName = () =>
    this.props.account.ticker === 'ETH' ? 'private key' : 'seed'
  render() {
    return (
      <>
        <CardHeader
          text={`Your new ${this.props.account.currency} wallet`}
          previous={VIEWS.CURRENCY_SELECT}
        />

        <Grid>
          <Grid.Row>
            <Grid.Column
              textAlign="left"
              style={{ color: '#FFF', fontSize: '0.9rem' }}
            >
              Welcome to your brand new {this.props.account.currency} wallet on
              the {this.props.account.environment} network. The generated
              address has been automatically linked to your PayID.
              <br />
              <br />
              <b>
                Please create a backup of your {this.keyMaterialName()} in order
                to spend your funds in future.
              </b>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Input
                fluid
                label={this.keyMaterialName()}
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
          <Grid.Row>
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
          </Grid.Row>
        </Grid>
      </>
    )
  }
}

export default WalletCreate
