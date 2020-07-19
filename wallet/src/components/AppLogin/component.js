import React from 'react'
import { Button, Grid } from 'semantic-ui-react'

import CardHeader from '../CardHeader'
import VIEWS from '../../views'

const AppLogin = (props) => (
  <>
    <CardHeader text="Sign in with Github" />
    <Grid>
      <Grid.Column>
        <Button
          size="medium"
          style={{
            background: 'linear-gradient(90deg,#ff3600,#ff8100)',
            color: '#FFF',
          }}
          onClick={() => props.setView(VIEWS.CURRENCY_SELECT)}
        >
          Login
        </Button>
      </Grid.Column>
    </Grid>
  </>
)

export default AppLogin
