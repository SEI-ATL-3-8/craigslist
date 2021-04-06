const express = require('express');
const categoryController = require('./../controllers/categoryController');
const { getAllCategories, getOneCategory, postCategoryPost, getCategoryPost, updateCategoryTag } = require('./../controllers/categoryController');

const categoryRouter = express.Router();

categoryRouter.get('/', getAllCategories);
categoryRouter.get('/:id', getOneCategory);
categoryRouter.get('/:id/posts', getCategoryPost);
categoryRouter.post('/:id/posts', postCategoryPost);
categoryRouter.put('/:categoryId/tags/:tagId', updateCategoryTag);


module.exports = categoryRouter;