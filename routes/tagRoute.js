const express = require('express')
const tagRouter = express.Router()
const { create, getAll, find, update, delete: destroy } = require('../controllers/tagController')
tagRouter.post('/', create)
tagRouter.get('/', getAll)
tagRouter.get('/:id', find)
tagRouter.put('/:id', update)
tagRouter.delete('/:id', destroy)
module.exports = tagRouter