import React from 'react'
import { Grid, Header, Form, Segment } from 'semantic-ui-react'

import Menu from '../Menu'

const Card = ({ children }) => (
  <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Grid.Column textAlign="center">
          <h2>XND</h2>
        </Grid.Column>

        <Grid.Column floated="right">
          <Menu />
        </Grid.Column>

        <Form size="large">
          <Segment
            style={{
              backgroundColor: '#002999',
              borderRadius: 7,
            }}
            raised
            padded
          >
            {children}
          </Segment>
        </Form>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Card
