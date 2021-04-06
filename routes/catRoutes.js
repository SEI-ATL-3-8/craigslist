const categoryController = require('../controllers/categoryController')

const express = require('express')
const { associateWithTag } = require('../controllers/categoryController')
const catRoutes = express.Router()

catRoutes.get('/', categoryController.getAllCats)
catRoutes.get('/:id', categoryController.getOneCat)
catRoutes.post('/:id/posts', categoryController.createPostCat)
catRoutes.get('/:id/posts', categoryController.getPostCat)
catRoutes.put('/:categoryId/tags/:tagId', associateWithTag)


module.exports = catRoutes