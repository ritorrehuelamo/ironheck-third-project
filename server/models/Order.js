const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  buyer: { type: Schema.Types.ObjectId, ref: 'User'},
  producer: { type: Schema.Types.ObjectId, ref: 'User'},
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
  amount: Number,
  totalPrice: Number
})

module.exports = mongoose.model('Order', orderSchema)