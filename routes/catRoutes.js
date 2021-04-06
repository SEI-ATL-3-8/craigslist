const categoryController = require('../controllers/categoryController')

const express = require('express')
const catRoutes = express.Router()

catRoutes.get('/', categoryController.getAllCats)
catRoutes.get('/:id', categoryController.getOneCat)
catRoutes.post('/:id/posts', categoryController.createPostCat)


module.exports = catRoutes