const categoryController = require('../controllers/categoryController')

const express = require('express')
const categoryRoutes = express.Router()


categoryRoutes.get('/', categoryController.getAll)
categoryRoutes.get('/:id', categoryController.find)
categoryRoutes.get('/:id/post', categoryController.find)

categoryRoutes.post('/', categoryController.create)
categoryRoutes.put('/', categoryController.update)
categoryRoutes.delete('/', categoryController.delete)

categoryRoutes.post('/:id/post',categoryController.post)


module.exports = categoryRoutes