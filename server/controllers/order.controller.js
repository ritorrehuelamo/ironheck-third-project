const Order = require('../models/Order')
const ObjectId = require('mongodb').ObjectID;

module.exports = {
  getAll: (req, res, next) => {
    Order.find({}).populate('buyer producer products')
    .then(orders => res.status(200).json(orders))
    .catch(e => res.status(500).json({message: 'Error to find all orders'}))
  },
  getByBuyer: (req, res, next) => {
    Order.find({$or: [{'buyer' : {_id: req.params.id}}, {'producer' : {_id: req.params.id}}]}).populate('buyer producer products')
    .then(order => res.status(200).json(order))
    .catch(e => res.status(500).json({message: 'Something went wrong'}))
  },
  getOne: (req, res, next) => {
    Order.findById(req.params.id).populate('buyer producer products')
    .then(order => res.status(200).json(order))
    .catch(e => res.status(500).json({message: 'Something went wrong'}))
  },
  newOrder: (req, res, next) => {
    const { buyer, producer, products, totalPrice } = req.body
    const newOrder = new Order({
      buyer, producer, products, totalPrice
    }).save()
    .then(order => {
      res.status(200).json({message: 'Your order was created'})
    }).catch(e => res.status(500).json({message: 'Error when try to create new order'}))
  },
  editOrder: (req, res, next) => {
    const { buyer, producer, product, amount, totalPrice } = req.body
    Order.findByIdAndUpdate(req.params.id,{
      $set: {
        'buyer': buyer,
        'producer': producer,
        'products': product,
        'totalPrice': totalPrice
      }
    }, {new: true}).exec()
    .then(order => res.status(200).json(order))
    .catch(e => res.status(500).json('Error when try to update an order'))
  },
  delete: (req, res, next) => {
    Order.findByIdAndRemove(req.params.id)
    .then(() => res.status(200).json({message: 'Order removed'}))
    .catch(e => res.status(500).json('Error when you try to delete the order'))
  }
}