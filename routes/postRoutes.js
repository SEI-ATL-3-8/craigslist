const postController = require('../controllers/postController')
const express = require('express')
const postRoutes = express.Router()

postRoutes.get('/', postController.getAll)

module.exports = postRoutes