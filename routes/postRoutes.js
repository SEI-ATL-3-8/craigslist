

const postController = require('../controllers/postController')
const express = require('express')
const postRoutes = express.Router()

postRoutes.get('/', postController.getAll)
postRoutes.get('/:id', postController.find)
postRoutes.post('/', postController.create)
postRoutes.put('/:id', postController.update)
postRoutes.delete('/:id', postController.delete)

module.exports = postRoutes