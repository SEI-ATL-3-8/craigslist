const express = require('express');
const categoryRouter = express.Router();

const categoryController = require('../controllers/categoryController')

categoryRouter.get('/', categoryController.getAll)
categoryRouter.get('/:id', categoryController.getOne)
categoryRouter.get('/:id/posts', categoryController.getPosts)
categoryRouter.post('/:id/posts', categoryController.createPost)
categoryRouter.put('/:categoryId/tags/:tagId', categoryController.associateTag)

module.exports = categoryRouter