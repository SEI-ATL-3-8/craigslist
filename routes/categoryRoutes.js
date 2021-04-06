// grab controller
const categoryController = require('../controllers/categoryController');

// express
const express = require('express');
const categoryRoutes = express.Router();

// routes
categoryRoutes.get('/', categoryController.getAll);
categoryRoutes.get('/:id', categoryController.getOne);
categoryRoutes.post('/', categoryController.create);
categoryRoutes.put('/:id', categoryController.update);
categoryRoutes.delete('/:id', categoryController.delete);
categoryRoutes.post('/:id/posts', categoryController.newPost);
categoryRoutes.get('/:id/posts', categoryController.getPosts);
categoryRoutes.put('/:categoryId/tags/:tagId', categoryController.newTag);
categoryRoutes.get('/:id/tags/', categoryController.getTags);

module.exports = categoryRoutes;