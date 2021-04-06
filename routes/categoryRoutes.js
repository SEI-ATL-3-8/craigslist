const express = require('express')
const categoryRoutes = express.Router()
const categoryControllers = require('../controllers/categoryControllers')

categoryRoutes.get('/', categoryControllers.getAll)
categoryRoutes.get('/:id', categoryControllers.getOne)
categoryRoutes.post('/:id/posts', categoryControllers.createPost)
categoryRoutes.get('/:id/posts', categoryControllers.getPosts)
categoryRoutes.put('/:categoryId/tags/:tagId', categoryControllers.associateTags)


module.exports = categoryRoutes