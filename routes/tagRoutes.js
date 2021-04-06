const tagController = require('../controllers/tagController')

const express = require('express')
const tagRoutes = express.Router()

tagRoutes.get('/', tagController.getAllTags)

module.exports = tagRoutes