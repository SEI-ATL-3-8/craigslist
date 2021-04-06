const postController = require('../controllers/postController');
const express = require('express');
const postRoutes = express.Router();

postRoutes.get('/:id/tags', postController.tags)

module.exports = postRoutes;