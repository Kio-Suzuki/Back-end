const express = require('express')
const router = express.Router()

let controllers = require('../controller/atv_control')

router.get("/rota1", controllers.rota1)
router.get("/rota2", controllers.rota2)
router.get("/redirect", controllers.redirect)

module.exports = router