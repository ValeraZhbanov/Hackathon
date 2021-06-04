const express = require('express')
const router = express.Router()

const hackathon = require('../controllers/hackathon')


router.get('/hackathon/:id', hackathon.selectById)
router.post('/hackathons', hackathon.select)

router.post('/inserthackathon', hackathon.insert)
router.put('/updatehackathon/:id', hackathon.update)



module.exports = router
