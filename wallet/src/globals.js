import Cookies from 'universal-cookie'
import _ from 'lodash'

export const xndBackendUrl = 'https://xnd-backend.herokuapp.com'

const baseUri = window.location.hostname
export const xndOauthUrl = _.includes(
  ['localhost', '127.0.0.1', '0.0.0.0'],
  baseUri
)
  ? `http://${baseUri}:9000`
  : 'https://xnd-oauth.herokuapp.com'

const cookies = new Cookies()
export const payId = () => `${cookies.get('username')}$${baseUri}`
