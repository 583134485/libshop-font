import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  console.log('getTokenKey:' + Cookies.get(TokenKey))
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  console.log('settoken--' + token)
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  console.log('remove token:' + Cookies.get(TokenKey))
  return Cookies.remove(TokenKey)
}
