const express = require('express');
const postRouter = express.Router();

const postController = require('../controllers/postController')

postRouter.get('/:id/tags', postController.getTags)

module.exports = postRouter