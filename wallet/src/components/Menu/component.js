import React from 'react'
import { Grid, Dropdown, Image } from 'semantic-ui-react'

import VIEWS from '../../views'
import { getPayId } from '../../globals.js'

const options = [
  { key: 'dummy', text: '', icon: null, value: 1 },
  { key: 'delink', text: 'Delink PayID', icon: 'unlink', value: 2 },
  { key: 'sign-out', text: 'Logout', icon: 'sign out', value: 3 },
]

const trigger = (
  <span
    style={{
      fontWeight: 'bold',
      background:
        'linear-gradient(to right,#FF4403 25%,#8601FF 50%,#0254FF 75%,#06C223 100%) 0 0',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
    }}
  >
    <Image src="payid.png" avatar />
    {getPayId()}
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
          onChange={(e, { value }) => props.handleMenu(value)}
        />
      </Grid.Column>
    </Grid>
  )

export default Menu
