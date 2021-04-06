const categoryController = require('../controllers/categoryController');
const express = require('express');
const categoryRoutes = express.Router();


categoryRoutes.get('/', categoryController.getAll)
categoryRoutes.get('/:id',categoryController.find)
categoryRoutes.post('/:id/posts', categoryController.createNewPost)
categoryRoutes.get('/:id/posts', categoryController.getAllPosts)
categoryRoutes.put('/:catergoryId/tags/:tagId', categoryController.associateWithTag)

module.exports = categoryRoutes;