const passport = require('passport')

const User = require('../models/User')
const sendEmail = require('../utils/sendEmail')

exports.getCurrentUser = function (req, res) {
  const user = req.user
  if (!user) return res.sendStatus(422)
  return res.json(user)
}

exports.register = async (req, res) => {
  console.log("register")
  console.log(req)

  const registerData = req.body

  if (!registerData.email) {
    return res.status(422).json({
      errors: {
        name: 'is required',
        message: 'Email is required',
      },
    })
  }

  const password = gen_password(20)
  const user = new User({ email: registerData.email, password: password })

  return user.save((errors, savedUser) => {
    if (errors) return res.status(422).json({ errors })
    
    try {
      sendEmail({
        email: user.email,
        subject: 'Ваш пароль на сайте "123" ' + password,
        message: "",
      })
      return res.status(200).json(savedUser)
    } catch (err) {
      return res.status(422).json({ errors })
    }
  })
}

exports.login = function (req, res, next) {
  const { email, password } = req.body

  if (!email) return res.status(422).json({errors: {email: 'is required', message: 'Email is required',},})
  
  if (!password) return res.status(422).json({errors: {password: 'is required', message: 'Password is required',},})

  return passport.authenticate('local', (err, passportUser) => {
    if (err) return next(err)
    
    if (passportUser) {
      req.login(passportUser, function (err) {
        if (err) next(err)
        return res.json(passportUser)
      })
    } else {
      return res.status(422).send({errors: {message: 'Invalid password or username',},})
    }
  })(req, res, next)
}

exports.logout = function (req, res) {
  req.logout()
  return res.json({ status: 'Session destroyed!' })
}

// @desc    Forgot password
// @route   POST /api/v1/users/forgotpassword
// @access  Public
exports.forgotPassword = async (req, res) => {
  const user = await User.findOne({ email: req.body.email })

  if (!user) return res.status(404).send({errors: {message: 'There is no user with that email',},})
  
  // Get reset token
  const resetToken = user.getResetPasswordToken()

  await user.save({ validateBeforeSave: false })

  // Create reset url
  const resetUrl = `${req.protocol}://${req.get('host')}/resetpassword?email=${req.body.email}&resettoken=${resetToken}`

  const message = `Вы получили это письмо, потому что выполнили запрос на восстановление пароля. Пожалуйста, перейдите по ссылке : \n\n ${resetUrl}`

  try {
    await sendEmail({
      email: user.email,
      subject: 'Восстановлениe пароля',
      message,
    })
    res.status(200).json({succes: true, data: 'Email sent',})
  } catch (err) {
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined

    await user.save({ validateBeforeSave: false })

    return res.status(500).send({errors: {message: 'Email could not be sent',},})
  }
}

// @desc    Reset password
// @route   PUT /api/v1/users/resetpassword/:resettoken
// @access  Public
exports.resetPassword = async (req, res) => {
  // Get hashed token
  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.resettoken)
    .digest('hex')

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  })

  if (!user) return res.status(400).send({errors: {message: 'Invalid token',},})
  
  // Set new password
  user.password = req.body.password
  user.resetPasswordToken = undefined
  user.resetPasswordExpire = undefined
  await user.save()

  res.status(200).json({
    succes: true,
    data: 'Password reset',
  })
}

function gen_password(len) {
  var password = ''
  var symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+='
  for (var i = 0; i < len; i++) 
    password += symbols.charAt(Math.floor(Math.random() * symbols.length))
  return password
}
