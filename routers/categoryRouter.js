const categoryController = require('../controllers/categoryController')
const express = require('express')
const categoryRouter = express.Router()

categoryRouter.get('/', categoryController.getAllCategory)
categoryRouter.get('/:id', categoryController.getCategory)
categoryRouter.post('/:id/post', categoryController.addPostInCategory)
categoryRouter.put('/:categoryId/tag/:tagId', categoryController.associateWithTag)
categoryRouter.get('/:id/post', categoryController.postInCat)


module.exports = categoryRouter;