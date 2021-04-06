const categoryController = require('../controllers/categoryController');
const express = require('express');
const categoryRoutes = express.Router();

categoryRoutes.get('/', categoryController.getAll);
categoryRoutes.get('/:id', categoryController.find);
categoryRoutes.post('/:id/posts', categoryController.post);
categoryRoutes.get('/:id/posts', categoryController.find);
categoryRoutes.put('/:categoryId/tags/:tagId', categoryController.update);
// postRoutes.post('/', postController.create);
// postRoutes.put('/:id', postController.update);
// postRoutes.delete('/:id', postController.delete);


module.exports = categoryRoutes;