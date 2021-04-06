const express = require('express');

const postRouter = express.Router();
const { getPostTag } = require('./../controllers/postController');

postRouter.get('/:id/tags', getPostTag);

module.exports = postRouter;