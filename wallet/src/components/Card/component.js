import React from 'react'
import { Grid, Header, Form, Segment } from 'semantic-ui-react'

const Card = ({ children }) => (
  <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" style={{ color: '#e63946' }} textAlign="center">
        XND
      </Header>

      <Form size="large">
        <Segment style={{ backgroundColor: '#002999', borderRadius: 7}} raised padded>
          {children}
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
)

export default Card
