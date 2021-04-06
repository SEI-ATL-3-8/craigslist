const tagController = require('../controllers/tagController')
const express = require('express')
const tagRouter = express.Router()

tagRouter.get('/', tagController.getAllTag)
tagRouter.get('/:id/posts', tagController.getPosts)


module.exports = tagRouter;