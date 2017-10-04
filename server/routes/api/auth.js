const express = require('express')
const authRoutes = express.Router()

const authController = require('../../controllers/auth.controller')

authRoutes.post('/signup', authController.signup)
authRoutes.post('/login', authController.login)
authRoutes.get('/logout', authController.logout)
authRoutes.get('/loggedin', authController.isLoggedIn)

module.exports = authRoutes