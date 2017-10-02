const express = require('express')
const router = express.Router()

const orders = require('./OrderRoutes')

router.use('/orders', orders)

module.exports = router