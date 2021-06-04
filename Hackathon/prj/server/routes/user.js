const express = require('express')
const router = express.Router()

const UsersCtrl = require('../controllers/user')
const AuthCtrl = require('../controllers/auth')

router.get('/me', AuthCtrl.onlyAuthUser, UsersCtrl.getCurrentUser)

router.post('/forgotpassword', UsersCtrl.forgotPassword)
router.put('/resetpassword/:resettoken', UsersCtrl.resetPassword)

router.post('/register', UsersCtrl.register)
router.post('/login', UsersCtrl.login)
router.post('/logout', UsersCtrl.logout)

module.exports = router
