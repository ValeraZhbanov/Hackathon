const express = require('express')
const router = express.Router()

const member = require('../controllers/member')


router.get('/member/:id', member.selectById)
router.post('/members', member.select)

router.post('/insertmember', member.insert)
router.put('/updatemember/:id', member.update)



module.exports = router
