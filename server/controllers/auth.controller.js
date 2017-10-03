const bcrypt = require('bcrypt')
const User = require('../models/User')
const passport = require('passport')

module.exports = {
  signup: (req, res, next) => {
    const {username, password, email} = req.body
  
    if(!username || !password) return res.status(400).json({message: 'Provide username and password'})
    
    User.findOne({username}, '_id').exec()
      .then(user => {
        if (user) return res.status(400).json({message: 'The username already exists'})
        
        const salt = bcrypt.genSaltSync(10)
        const hashPass = bcrypt.hashSync(password, salt)
        const newUser = new User({
          username,
          password: hashPass,
          email
        })
        return newUser.save()
          .then(user => {
            req.login(user, (err) => {
              if(err) return res.status(500).json({message: 'Something went wrong'})
              res.status(200).json(req.user)
            })
          })
      })
      .catch(e => {
        console.log(e)
        res.status(400).json({message: 'Something went wrong'})
      })
  },
  login: (req, res, next) => {
    passport.authenticate('local', (err, user, failureDetails) => {
      if(err) return res.status(500).json({message: 'Something went wrong'})
      if(!user) return res.status(401).json(failureDetails)
      req.login(user, (err) => {
        if(err) return res.status(500).json({message: 'Something went wrong'})
        res.status(200).json(req.user)
      })
    })(req, res, next)
  },
  isLoggedIn: (req, res, next) => {
    if(req.isAuthenticated())
      return res.status(200).json(req.user)
    res.status(403).json({message: 'Unauthorized'})
  },
  logout: (req, res, next) => {
    req.logout()
    res.status(200).json({message: 'Success'})
  }
}