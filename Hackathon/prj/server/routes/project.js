const express = require('express')
const router = express.Router()

const project = require('../controllers/project')


router.get('/project/:id', project.selectById)
router.post('/projects', project.select)

router.post('/insertproject', project.insert)
router.put('/updateproject/:id', project.update)

router.put('/updateproject/:id/insertfile', project.insertFile)

module.exports = router
