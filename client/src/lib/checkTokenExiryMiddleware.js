import { history } from '../lib/history'

function createMiddleware () {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (action.type == 'REDIRECT_STATUS') history.replace(action.payload)
    const expiry = Date.parse(getState().auth.expiry)
    if (expiry < Date.now()) {
      history.replace('/login')
      return next({ type: 'LOGOUT' })
    }
    return next(action)
  }
}

const checkTokenExpiryMiddleware = createMiddleware()

export default checkTokenExpiryMiddleware
