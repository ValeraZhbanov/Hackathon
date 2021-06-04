const express = require('express')
const router = express.Router()

const command = require('../controllers/command')


router.get('/command/:id', command.selectById)
router.post('/commands', command.select)

router.post('/insertcommand', command.insert)
router.put('/updatecommand/:id', command.update)



module.exports = router
