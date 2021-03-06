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
  image: {type: String, default: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'},
  userType: {type: String, enum: ['provider', 'client']},
  companyName: {type: String, default: ''},
  productionType: {type: String, default: ''},
  seasonStarts: {type: Date},
  seasonEnds: {type: Date}
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = mongoose.model('User', userSchema)
