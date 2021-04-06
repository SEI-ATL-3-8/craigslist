const postsController = require('../controllers/postsController')
const express = require('express')
const router = express.Router()

router.get('/:id/tags', postsController.getTags)

module.exports = router