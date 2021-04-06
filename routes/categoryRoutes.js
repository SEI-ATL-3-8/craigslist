const categoryController = require('../controllers/categoryController');
const express = require('express');
const categoryRoutes = express.Router();

categoryRoutes.get('/', categoryController.getAll);
categoryRoutes.get('/:id', categoryController.find);
categoryRoutes.post('/:id/posts', categoryController.create);
categoryRoutes.get('/:id/posts', categoryController.find);
categoryRoutes.put('/:categoryId/tags/:tagId', categoryController.update);



module.exports = categoryRoutes;