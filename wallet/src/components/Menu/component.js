import React from 'react'
import { Grid, Dropdown, Image } from 'semantic-ui-react'

import VIEWS from '../../views'

const options = [{ key: 'sign-out', text: 'Logout', icon: 'sign out' }]

const trigger = (
  <span
    style={{
      fontWeight: 'bold',
      background:
        'linear-gradient(to right,#FF4403 25%,#8601FF 50%,#0254FF 75%,#06C223 100%) 0 0',
      webkitBackgroundClip: 'text',
      color: 'transparent',
    }}
  >
    <Image src="payid.png" avatar />
    alice$localhost
  </span>
)

const Menu = (props) =>
  props.views.index !== VIEWS.APP_LOGIN && (
    <Grid>
      <Grid.Column textAlign="right">
        <Dropdown
          trigger={trigger}
          options={options}
          pointing="top left"
          icon={null}
        />
      </Grid.Column>
    </Grid>
  )

export default Menu
