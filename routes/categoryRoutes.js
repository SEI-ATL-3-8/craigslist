const categoryController = require('../controllers/categoryControllers')
const express = require('express')
const categoryRoutes = express.Router()

categoryRoutes.get('/', categoryController.getAll)
categoryRoutes.get('/:id', categoryController.findOne)
categoryRoutes.post('/:id/posts', categoryController.create)
// categoryRoutes.put('/:id/tag', categoryController.update)



module.exports = categoryRoutes