const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name: {type: String, required: true},
  producer: {type: Schema.Types.ObjectId, ref: 'User'},
  price: {type: Number, required: true},
  ecological: {type: Boolean, required: true},
  description: String,
  image: {type: String, default: ''}
})

module.exports = mongoose.model('Product', productSchema)