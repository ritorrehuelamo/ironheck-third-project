const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  buyer: { type: Schema.Types.ObjectId, ref: 'User'},
  producer: { type: Schema.Types.ObjectId, ref: 'User'},
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  totalPrice: Number
})

module.exports = mongoose.model('Order', orderSchema)