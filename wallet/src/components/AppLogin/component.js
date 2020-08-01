import React from 'react'
import _ from 'lodash'
import { Button, Grid, Icon } from 'semantic-ui-react'

import CardHeader from '../CardHeader'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const CLIENT_ID = _.includes(
  ['localhost', '127.0.0.1', '0.0.0.0'],
  window.location.hostname
)
  ? '04e241589a58fb50fbf9'
  : 'e0b192fcc3e5b7cb1462'

const REDIRECT_URI = window.location.origin

class AppLogin extends React.Component {
  componentDidMount() {
    const m = window.location.href.match(/\?code=(.*)/)
    const code = m && m[1]

    if (cookies.get('github') !== undefined) {
      if (code !== null) {
        window.location.href = '/'
      }
      this.props.setView()
      return
    }

    code && this.props.getAuthenticationToken(code)
  }

  render() {
    return (
      <>
        <CardHeader text="Login" />
        <Grid>
          <Grid.Column>
            <Button
              size="medium"
              style={{
                background: 'linear-gradient(90deg,#ff3600,#ff8100)',
                color: '#FFF',
              }}
              onClick={() =>
                (window.location = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=read:user&redirect_uri=${REDIRECT_URI}`)
              }
            >
              <Icon name="github" />
              Authorize GitHub
            </Button>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}

export default AppLogin
