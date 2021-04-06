const tagsController = require('../controllers/tagsController')
const express = require('express')
const router = express.Router()

router.get('/', tagsController.getAll)
router.get('/:id/posts', tagsController.getPosts)

module.exports = router