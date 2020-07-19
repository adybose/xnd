import React from 'react'
import { Grid, Dropdown, Image } from 'semantic-ui-react'

import VIEWS from '../../views'

const options = [{ key: 'sign-out', text: 'Logout', icon: 'sign out' }]

const trigger = (
  <span
    style={{
      color: '#000',
      fontWeight: 'bold',
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
