const express = require('express')
const usersRoutes = express.Router()
const usersController = require('../../controllers/user.controller')

usersRoutes.get('/', usersController.getAll)
usersRoutes.get('/:id', usersController.getOne)
usersRoutes.put('/:id/edit', usersController.editUser)
usersRoutes.delete('/:id/delete', usersController.deleteUser)


module.exports = usersRoutes