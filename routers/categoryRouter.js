const express = require('express');
const { getAllCategories, getOneCategory, postCategoryPost, getCategoryPost } = require('./../controllers/categoryController');

const categoryRouter = express.Router();

categoryRouter.get('/', getAllCategories);
categoryRouter.get('/:id', getOneCategory);
categoryRouter.get('/:id/posts', getCategoryPost);
categoryRouter.post('/:id/posts', postCategoryPost);


module.exports = categoryRouter;