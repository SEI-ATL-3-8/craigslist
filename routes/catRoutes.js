const catController = require('../controllers/catController')

const express = require('express')
const catRoutes = express.Router()

catRoutes.get('/', catController.getAll)
catRoutes.get('/:catId', catController.findOne)
module.exports = catRoutes