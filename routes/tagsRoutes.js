const express = require('express')
const tagRoutes = express.Router()

const tagsController = require('../controllers/tagsController')

tagRoutes.get('/', tagsController.allTags)
tagRoutes.get('/tags/:id/posts', tagsController.getPosts)

module.exports = tagRoutes