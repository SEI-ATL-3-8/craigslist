const postController = require('../controllers/postController')
const express = require('express')
const postRouter = express.Router()

postRouter.get('/:id/tag', postController.getTag)

module.exports = postRouter;