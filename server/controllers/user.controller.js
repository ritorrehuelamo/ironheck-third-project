const User = require('../models/User')

const updateUserObject = (username, firstName, lastName, email, address, phoneNumber, image, userType, companyName, productionType, seasonStarts, seasonEnds) => {
  return {
    'username': username, 
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
  }
}

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
    const {username, firstName, lastName, email, address, phoneNumber, image, userType, companyName, productionType, seasonStarts, seasonEnds} = req.body

    User.findByIdAndUpdate(req.params.id,{
      $set: updateUserObject(username, firstName, lastName, email, address, phoneNumber, image, userType, companyName, productionType, seasonStarts, seasonEnds)
    },{new: true}).exec()
    .then(user => res.status(200).json(user))
    .catch(e => res.status(500).json({message: `Error updating user -> ${e}`}))
  },
  deleteUser: (req, res, next) => {
    User.findByIdAndRemove(req.params.id)
    .then(() => res.status(200).json({message: 'User removed'}))
    .catch( e => res.status(500).json({message: `Error when trying to delete user -> ${e}`}))
  }
}