const express = require('express')
const router = express.Router()

const task = require('../controllers/task')


router.get('/task/:id', task.selectById)
router.post('/tasks', task.select)

router.post('/inserttask', task.insert)
router.put('/updatetask/:id', task.update)

router.post('/updatetask/:id/insertfile/', task.insertFile)


module.exports = router
