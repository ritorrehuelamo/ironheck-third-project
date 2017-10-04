const Product = require('../models/Product')

module.exports = {
  getAll: (req, res, next) => {
    Product.find({}).populate('producer')
    .then(products => res.status(200).json(products))
    .catch(e => res.status(500).json({message: 'Error getting all products'}))
  },
  getOne: (req, res, next) => {
    Product.findById(req.params.id).populate('producer')
    .then(product => res.status(200).json(product))
    .catch(e => res.status(500).json({message: 'Error rendering a single product'})) 
  },
  newProduct: (req, res, next) => {
    const {name, producer, ecological, description} = req.body
    const price = parseFloat(req.body.price).toFixed(2)
    const newProduct = new Product({
      name, producer, price, ecological, description
    }).save()
    .then(product => {
      res.status(200).json(product)
    }).catch(e => res.status(500).json({message: 'Something went wrong'}))
  },
  editProduct: (req, res, next) => {
    const {name, price, ecological, description} = req.body
    Product.findByIdAndUpdate({ _id: req.params.id},{
    $set: {
      'name': name,
      'price': price,
      'ecological': ecological,
      'description': description
    }},{new: true}).exec()
    .then(product => res.status(200).json(product))
    .catch(e => res.status(500).json({message: 'Error trying to update product'}))
  },
  deleteProduct: (req, res, next) => {
    Product.findByIdAndRemove({_id: req.params.id})
      .then(() => res.status(200).json({message: 'Product removed'}))
      .catch(e => res.status(500).json('Error when you try to delete the product'))
  }
}