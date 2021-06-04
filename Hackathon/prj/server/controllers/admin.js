const User = require('../models/User')

module.exports.getAll = async function (req, res) {
  try {
    const users = await User.find({}).sort('username').select({ password: 0 })
    return res.status(200).json(users)
  } catch (error) {
    return res.status(422).json(error)
  }
}

exports.getAdminUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select({ password: 0 })
    return res.status(200).json(user)
  } catch (error) {
    return res.status(422).json(error)
  }
}

// @desc    Update user
// @route   PUT /api/v1/admin/users/:id
// @access  Private
exports.updateUser = async (req, res) => {
  const data = req.body
  data.updatedAt = Date.now()
  const user = await User.findByIdAndUpdate(req.params.id, data, {
    new: true,
    runValidators: true,
  })
  if (!user) {
    return res.status(404).json({ success: false, data: {} })
  }
  return res.json({ success: true })
}

exports.register = function (req, res) {
  const registerData = req.body

  if (!registerData.email) {
    return res.status(422).json({
      errors: {
        name: 'is required',
        message: 'Email is required',
      },
    })
  }

  if (!registerData.fio) {
    return res.status(422).json({
      errors: {
        fio: 'is required',
        message: 'fio is required',
      },
    })
  }

  if (!registerData.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
        message: 'Password is required',
      },
    })
  }

  if (registerData.password !== registerData.passwordConfirmation) {
    return res.status(422).json({
      errors: {
        password: 'is not the same as confirmation password',
        message: 'Password is not the same as confirmation password',
      },
    })
  }

  const user = new User(registerData)

  return user.save((errors, savedUser) => {
    if (errors) {
      return res.status(422).json({ errors })
    }

    return res.json(savedUser)
  })
}
