const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  firstName: String,
  lastName: String,
  email: String,
  address: String,
  phoneNumber: Number,
  image: {type: String, default: ''},
  userType: {type: String, enum: ['provider', 'client']},
  companyName: {type: String, default: ''},
  productionType: {type: String, default: ''},
  seasonStarts: {type: Date, default: Date.now},
  seasonEnds: {type: Date, default: Date.now}
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = mongoose.model('User', userSchema)
