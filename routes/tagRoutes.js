const express = require('express')
const router = express.Router()

const tagController = require('../controllers/tagController')

tagRoutes.get('/',tagController.getAll)
tagRoutes.get('/:id/posts',tagController.getPosts)


module.exports = router