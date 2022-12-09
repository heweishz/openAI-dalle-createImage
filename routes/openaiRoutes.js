const { generateimage } = require('../controllers/openaiController')
const router = require('express').Router()

router.post('/generateimage', generateimage)
module.exports = router
