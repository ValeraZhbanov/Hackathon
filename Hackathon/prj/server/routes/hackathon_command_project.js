const express = require('express')
const router = express.Router()

const hackathon_command_project = require('../controllers/hackathon_command_project')

router.get('/hackathon_command_project/:id', hackathon_command_project.selectById)
router.post('/hackathon_command_project_s', hackathon_command_project.select)

router.post('/insert_hackathon_command_project', hackathon_command_project.insert)
router.put('/update_hackathon_command_project/:id', hackathon_command_project.update)



module.exports = router
