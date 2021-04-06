const tagController = require('../controllers/tagController')

const express = require('express')
const tagRoutes = express.Router()

tagRoutes.get('/', tagController.getAllTags)
tagRoutes.get('/:id/posts', tagController.getAllPosts)

module.exports = tagRoutes