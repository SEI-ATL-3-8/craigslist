// grab controller
const postController = require('../controllers/postController');

// express
const express = require('express');
const postRoutes = express.Router();

// routes
postRoutes.get('/:id/tags', postController.getTags);

module.exports = postRoutes;