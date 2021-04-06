const express = require('express')
const categoryRoutes = express.Router()
const categoryControllers = require('../controllers/categoryControllers')

categoryRoutes.get('/', categoryControllers.getAll)
categoryRoutes.get('/:id', categoryControllers.getOne)


module.exports = categoryRoutes