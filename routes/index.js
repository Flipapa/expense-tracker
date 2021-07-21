const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const records = require('./modules/records')

// route modules
router.use('/', home)
router.use('/records', records)

// export router
module.exports = router