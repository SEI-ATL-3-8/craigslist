const tagController = require('../controllers/tagController')

const express = require('express')
const tagRoutes = express.Router()

tagRoutes.get('/', tagController.getAll)
tagRoutes.post('/:id/catergory',tagController.associateWithPost)
module.exports = tagRoutes