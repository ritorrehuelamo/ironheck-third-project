const express = require('express')
const path = require('path')
const debug = require('debug')("app:"+path.basename(__filename).split('.')[0])
const authController = require('../../controllers/auth.controller')

const authRoutes = express.Router()

authRoutes.post('/signup', authController.signup)
authRoutes.post('/login', authController.login)
authRoutes.get('/logout', authController.logout)
authRoutes.get('/loggedin', authController.isLoggedIn)

module.exports = authRoutes