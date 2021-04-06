const categoryController = require('../controllers/categoryController')

const express = require('express')
const postRoutes = express.Router()

categoryController.get('/',categoryController.getAll)
categoryController.get('/:id',categoryController.getOne)

module.exports = categoryRoutes