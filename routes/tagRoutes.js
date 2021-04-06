const express = require('express')
const tagRoutes = express.Router()
const tagControllers = require('../controllers/tagControllers')

tagRoutes.get('/', tagControllers.getAll)
tagRoutes.get('/:id/posts', tagControllers.getAssociates)





module.exports = tagRoutes