const tagController = require('../controllers/tagController');
const express = require('express');
const tagRoutes = express.Router();

tagRoutes.get('/', tagController.getAll);
tagRoutes.get('/:id/posts', tagController.getPosts)




module.exports = tagRoutes;