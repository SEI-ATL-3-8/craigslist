const express = require('express')
const postRouter = express.Router()
const { create, getAll, find, update, delete: destroy } = require('../controllers/postController')
postRouter.post('/', create)
postRouter.get('/', getAll)
postRouter.get('/:id', find)
postRouter.put('/:id', update)
postRouter.delete('/:id', destroy)
module.exports = postRouter