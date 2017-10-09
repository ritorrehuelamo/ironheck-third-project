const express = require('express')
const productsRoutes = express.Router()
const productController = require('../../controllers/products.controller')

productsRoutes.get('/', productController.getAll)
productsRoutes.get('/:id', productController.getOne)
productsRoutes.post('/new', productController.newProduct)
productsRoutes.put('/:id/edit', productController.editProduct)
productsRoutes.delete('/:id/delete', productController.deleteProduct)

module.exports = productsRoutes