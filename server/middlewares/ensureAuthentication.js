const jwt = require('jwt-simple')
const moment = require('moment')

const authenticated = (req, res, next) => {
  if(!req.headers.authorization) {
    return req.send(403).json({msg: 'Not allowed'})
  }

  let token = req.headers.authorization.split("")[1]
  let payload = jwt.decode(token, process.env.TOKEN_SECRET)

  if(payload.exp === moment.unix()) {
    return res.send(401).json({msg: 'Access expired'})
  }

  req.user = payload.sub
  next()
}

module.exports = {
  authenticated
}