const express = require('express')
const router = express.Router()
const auth = require('./auth')
const product = require('./products')
const user = require('./user')
const order = require('./order')

router.use('/', auth)
router.use('/users', user)
router.use('/products', product)
router.use('/orders', order)

module.exports = router