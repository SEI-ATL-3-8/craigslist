const tagController = require('../controllers/tagController');
const express = require('express');
const tagRoutes = express.Router();



tagRoutes.get('/', tagController.getAll)
tagRoutes.get('/:id/posts', tagController.getAllPosts)
tagRoutes.put('/:tagId/posts/:postId', tagController.associateWithPost)




module.exports = tagRoutes;