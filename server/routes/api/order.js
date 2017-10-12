const express = require('express')
const ordersRouter = express.Router()
const ordersController = require('../../controllers/order.controller')

ordersRouter.get('/', ordersController.getAll)
ordersRouter.get('/:id', ordersController.getOne)
ordersRouter.post('/new', ordersController.newOrder)
ordersRouter.get('/:id/user', ordersController.getByBuyer)
ordersRouter.put('/:id/edit', ordersController.editOrder)
ordersRouter.delete('/:id/delete', ordersController.delete)

module.exports = ordersRouter