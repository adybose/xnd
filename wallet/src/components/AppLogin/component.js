import React from 'react'
import { Button, Grid, Icon } from 'semantic-ui-react'

import CardHeader from '../CardHeader'
import VIEWS from '../../views'

const AppLogin = (props) => (
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
          onClick={() => props.setView(VIEWS.CURRENCY_SELECT)}
        >
          <Icon name="github" />
          Authorize GitHub
        </Button>
      </Grid.Column>
    </Grid>
  </>
)

export default AppLogin
