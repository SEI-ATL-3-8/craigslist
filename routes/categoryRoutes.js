const categoryController = require('../controllers/categoryController')
const express = require('express')
const categoryRoutes = express.Router()

categoryRoutes.get('/', categoryController.allCategories)
categoryRoutes.get('/:id', categoryController.categorytById)
categoryRoutes.post('/', categoryController.createCategory)

module.exports = categoryRoutes