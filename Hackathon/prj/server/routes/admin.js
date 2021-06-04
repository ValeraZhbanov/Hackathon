const express = require('express')
const AuthCtrl = require('../controllers/auth')

const router = express.Router()
const AdminUsersCtrl = require('../controllers/admin_users')

router.get('/users', AuthCtrl.onlyAdmin, AdminUsersCtrl.getAll)
router.post('/users', AuthCtrl.onlyAdmin, AdminUsersCtrl.register)
router.get('/users/:id', AuthCtrl.onlyAdmin, AdminUsersCtrl.getAdminUserById)
router.put('/users/:id', AuthCtrl.onlyAdmin, AdminUsersCtrl.updateUser)

module.exports = router
