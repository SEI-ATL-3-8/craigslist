const express = require('express')
const tagRoutes = express.Router()
const tagControllers = require('../controllers/tagControllers')



tagRoutes.get('/', tagControllers.getAll)


module.exports = tagRoutes