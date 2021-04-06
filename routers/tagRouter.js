const express = require('express');
const { getAllTags, getTagPosts } = require('./../controllers/tagController');
const tagRouter = express.Router();


tagRouter.get('/', getAllTags);
tagRouter.get('/:id/posts', getTagPosts);


module.exports = tagRouter; 