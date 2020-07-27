import React, { Component } from 'react'
import { Message, Container } from 'semantic-ui-react'

class MessageBlock extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.clearMessage()
    }, 5000)
  }

  handleDismiss = () => {
    this.props.clearMessage()
  }

  render() {
    return (
      this.props.visible && (
        <Container>
          <Message
            fluid
            error={this.props.error}
            success={this.props.success}
            onDismiss={this.handleDismiss}
            header={this.props.header}
            content={this.props.content}
          />
        </Container>
      )
    )
  }
}

export default MessageBlock
