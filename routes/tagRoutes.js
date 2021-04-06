const tagsControllers = require('../controllers/tagsControllers')
const express = require('express')
const categoryRoutes = require('./categoryRoutes')
const tagRoutes = express.Router()

tagRoutes.get('/', tagsControllers.getAll)

module.exports = categoryRoutes