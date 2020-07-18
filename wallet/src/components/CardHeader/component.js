import React from 'react'
import { Header, Divider } from 'semantic-ui-react'

const CardHeader = ({ text }) => (
  <>
    <Header as="span" style={{ color: 'white' }} floated="left">
      <h4>&lt;</h4>
    </Header>
    <Header as="span" style={{ color: 'white' }} textAlign="center">
      <h4>{text}</h4>
    </Header>

    <Divider />
  </>
)

export default CardHeader
