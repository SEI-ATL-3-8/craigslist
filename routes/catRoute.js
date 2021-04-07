const catController = require('../controllers/catController')
const express = require('express')
const category = require('../models/category')
const catRoute = express.Router()

catRoute.get('/', catController.getAll)
catRoute.get('/:id', catController.findOne)








module.exports = catRoute

