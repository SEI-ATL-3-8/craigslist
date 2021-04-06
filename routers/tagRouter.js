const express = require('express');
const { getAllTags } = require('./../controllers/tagController');
const tagRouter = express.Router();


tagRouter.get('/', getAllTags);


module.exports = tagRouter; 