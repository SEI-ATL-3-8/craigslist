// grab controller
const tagController = require('../controllers/tagController');

// express
const express = require('express');
const tagRoutes = express.Router();

// routes
tagRoutes.get('/', tagController.getAll);
tagRoutes.get('/:id/posts', tagController.getPosts);

module.exports = tagRoutes;