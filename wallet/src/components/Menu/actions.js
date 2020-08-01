import axios from 'axios'
import Cookies from 'universal-cookie'

import { xndBackendUrl, getUser } from '../../globals.js'

const cookies = new Cookies()

export const handleMenu = (value) => (dispatch) => {
  if (value === 3) {
    cookies.remove('github')
    cookies.remove('username')
    window.location.href = '/'
  } else if (value === 2) {
    axios
      .delete(`${xndBackendUrl}/${getUser()}`)
      .then((res) => {
        window.location.href = '/'
      })
      .catch((error) => {
        console.error(error)
        dispatch({
          type: 'PREFERENCES.SET_MESSAGE',
          data: {
            error: true,
            header: 'Failed to delete address from PayID',
            content: error,
          },
        })
        return
      })
  }
}
