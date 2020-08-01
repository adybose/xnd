import axios from 'axios'
import Cookies from 'universal-cookie'

import { xndBackendUrl, xndOauthUrl, getUser } from '../../globals.js'
import views from '../../views'

const cookies = new Cookies()

export const getAuthenticationToken = (code) => async (dispatch) => {
  axios
    .get(`${xndOauthUrl}/authenticate/${code}`)
    .catch((error) => {
      console.error(error)
      cookies.remove('github')
      cookies.remove('username')
      dispatch({
        type: 'PREFERENCES.SET_MESSAGE',
        data: {
          error: true,
          header: 'Authentication with GitHub failed',
          content: error,
        },
      })
      return
    })
    .then((res) => {
      if (!!res.data.error) {
        console.error(res.data.error)
        cookies.remove('github')
        cookies.remove('username')
        dispatch({
          type: 'PREFERENCES.SET_MESSAGE',
          data: {
            error: true,
            header: 'Authentication with GitHub failed',
            content: res.data.error,
          },
        })
        return
      }

      const token = res.data.access_token
      axios
        .get('https://api.github.com/user', {
          headers: {
            Authorization: `token ${token}`,
          },
        })
        .then((res) => {
          cookies.set('github', token)
          cookies.set('username', res.data.login)
          window.location.href = '/'
        })
        .catch((error) => {
          console.error(error)
          cookies.remove('github')
          cookies.remove('username')
          dispatch({
            type: 'PREFERENCES.SET_MESSAGE',
            data: {
              error: true,
              header: 'Authentication with GitHub failed',
              content: error,
            },
          })
          return
        })
    })
}

export const setView = () => (dispatch) => {
  axios
    .get(`${xndBackendUrl}/${getUser()}`)
    .then((response) => {
      dispatch({
        type: 'ACCOUNT.SET_ADDRESS',
        data: response.data,
      })

      dispatch({
        type: 'VIEWS.SET_VIEW',
        data: views.WALLET_UNLOCK,
      })
    })
    .catch((error) => {
      dispatch({
        type: 'VIEWS.SET_VIEW',
        data: views.CURRENCY_SELECT,
      })
    })
}
