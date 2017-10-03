const express = require('express')
const router = express.Router()
const auth = require('./auth')
const product = require('./products')
const user = require('./user')

router.use('/', auth)
router.use('/users', user)
router.use('/products', product)

module.exports = router