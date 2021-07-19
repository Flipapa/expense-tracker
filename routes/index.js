const express = require('express')
const router = express.Router()
const home = require('./modules/home')

// route modules
router.use('/', home)

// export router
module.exports = router