const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = {
  getAll: (req, res, next) => {
    User.find({})
    .then(users => res.status(200).json(users))
    .catch(e => res.status(500).json({message: `Error getting all users -> ${e}`}))
  },
  getOne: (req, res, next) => {
    User.findById(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(e => res.status(500).json(`Error getting user -> ${e}`))
  },
  editUser: (req, res, next) => {
    const {username, password, firstName, lastName, email, address, phoneNumber, image, userType, companyName, productionType, seasonStarts, seasonEnds} = req.body
    const salt = bcrypt.genSaltSync(10)
    const hashPass = bcrypt.hashSync(password, salt)
    User.findByIdAndUpdate(req.params.id,{
      $set: {
        'username': username, 
        'password': hashPass, 
        'firstName': firstName, 
        'lastName': lastName, 
        'email': email, 
        'address': address, 
        'phoneNumber': phoneNumber, 
        'image': image, 
        'userType': userType, 
        'companyName': companyName, 
        'productionType': productionType, 
        'seasonStarts': seasonStarts, 
        'seasonEnds': seasonEnds
      }},
      {new: true}).exec()
    .then(user => res.status(200).json(user))
    .catch(e => res.status(500).json({message: `Error updating user -> ${e}`}))
  },
  deleteUser: (req, res, next) => {
    User.findByIdAndRemove(req.params.id)
    .then(() => res.status(200).json({message: 'User removed'}))
    .catch( e => res.status(500).json({message: `Error when trying to delete user -> ${e}`}))
  }
}