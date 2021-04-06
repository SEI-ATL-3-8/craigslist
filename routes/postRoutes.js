const express = require('express')
const postRoutes = express.Router()
const postControllers = require('../controllers/postControllers')

postRoutes.get('/:id/tags', postControllers.getTags)
postRoutes.put('/:key', postControllers.update)
postRoutes.delete('/:key', postControllers.destroy)



module.exports = postRoutes