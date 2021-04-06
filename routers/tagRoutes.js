const tagControllers = require('../controllers/tagsControllers')
const express = require('express')
const tagRoutes = express.Router()

tagRoutes.get('/', tagControllers.getAll)
tagRoutes.get('/:id/posts', tagControllers.getPosts)

module.exports = tagRoutes