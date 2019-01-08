const jwt = require('jwt-simple')
const moment = require('moment')

const createToken = user => {
  let payload = {
    sub: user.id,
    int: moment.unix(),
    exp: moment().add(1, 'hour').unix()
  }

  return jwt.encode(payload, process.env.TOKEN_SECRET)
}

module.exports = {
  createToken
}