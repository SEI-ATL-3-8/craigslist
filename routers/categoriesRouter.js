const categoriesController = require('../controllers/categoriesController')
const express = require('express')
const router = express.Router()

router.get('/', categoriesController.getAll)
router.get('/:id', categoriesController.getOne)
router.post('/:id/posts', categoriesController.createPost)
router.get('/:id/posts', categoriesController.getAllPosts)
module.exports = router