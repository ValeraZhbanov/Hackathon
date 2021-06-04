const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const Schema = mongoose.Schema

const keys = require('../keys')

const user = new Schema({
  email: {
    type: String,
    required: [true, 'Please add a email'],
    lowercase: true,
    unique: [true, 'Email is not unique'],
    match: [/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/],
  },
  password: String,
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  roles: {
    type: [
      {
        role: {
          type: String,
          enum: ['admin', 'expert', 'member'],
        },
      },
    ],
    required: true,
    default: {
      role: 'member',
    },
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'deleted'],
    default: 'active',
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

user.pre('save', function (next) {
  const user = this
  if (!user.isModified('password')) next()

  bcryptjs.genSalt(10, function (err, salt) {
    if (err) return next(err)

    bcryptjs.hash(user.password, salt, function (err, hash) {
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
})

// Every user have access to this methods
user.methods.comparePassword = function (candidatePassword, callback) {
  bcryptjs.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return callback(err)

    callback(null, isMatch)
  })
}

// Generate and hash password token
user.methods.getResetPasswordToken = function () {
  // Generate token
  const resetToken = crypto.randomBytes(20).toString('hex')

  // Hash token and set to resetPasswordToken field
  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex')

  // Set expire
  this.resetPasswordExpire = Date.now() + keys.RESET_PASSWORD_EXPIRE

  return resetToken
}

module.exports = mongoose.model('User', user)
