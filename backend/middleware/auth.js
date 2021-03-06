const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.auth = (req, res, next) => {
  // get token from header
  const token = req.header('x-auth-token')

  // check if token isn't present
  if (!token) {
    // return 401 unauthorized response
    return res.status(401).json({ msg: 'No token, authorization denied' })
  }
  // verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded.user.id // decoded.user is from our payload that
    // we sign with in controller/auth.js -> sigin
    next()
  } catch (err) {
    res.status(401).json({ msg: 'Token is invalid' })
  }
}
