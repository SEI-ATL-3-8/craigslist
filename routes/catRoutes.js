const categoryController = require('../controllers/categoryController')

const express = require('express')
const catRoutes = express.Router()

catRoutes.get('/', categoryController.getAllCats)

module.exports = catRoutes