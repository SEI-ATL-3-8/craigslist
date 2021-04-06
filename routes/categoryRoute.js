const express = require('express')
const categoryRoutes = express.Router()

const categoryController = require('../controller/postController')

categoryRoutes.get('/', categoryController.getAll)

categoryRoutes.get('/:id', categoryController.getOne)

categoryRoutes.create('/:id/post', categoryController.create)

categoryRoutes.update('/:id/post', categoryController.update)

categoryRoutes.getAll('/:id/post', categoryController.getAll)

module.exports = categoryRoutes