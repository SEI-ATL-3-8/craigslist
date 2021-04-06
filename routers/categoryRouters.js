const categoryControllers = require('../controllers/categoryControllers')
const express = require('express')
const categoryRouter = express.Router()

categoryRouter.get('/', categoryControllers.getAll)
categoryRouter.get('/:id', categoryControllers.getOne)
categoryRouter.post('/:id/post', categoryControllers.getOne)

module.exports = categoryRouter
