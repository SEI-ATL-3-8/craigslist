const postController = require('../controllers/postController')
const express = require('express')
const post = require('../models/post')
const postRoutes = express.Router()

postRoutes.get('/', postController.allPosts)
postRoutes.get('/:id', postController.getPostById)
postRoutes.post('/', postController.createPost)
postRoutes.delete('/:id', postController.deletePost)
postRoutes.post('/:id/tag/:tagId', postController.addTag)
postRoutes.get('/:id/tag', postController.getTags)
postRoutes.get('/:id/category/', postController.getCategory)


module.exports = postRoutes