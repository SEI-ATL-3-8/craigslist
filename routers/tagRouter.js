const express = require('express');
const tagRouter = express.Router();

const tagController = require('../controllers/tagController')

tagRouter.get('/', tagController.getAll)

module.exports = tagRouter