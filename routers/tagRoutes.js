const tagControllers = ('../controllers/tagsControllers')
const express = require('express')
const tagRoutes = express.Router()

tagRoutes.get('/', tagControllers.getAll)

module.exports = tagRoutes