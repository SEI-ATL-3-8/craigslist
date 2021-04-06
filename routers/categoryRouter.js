const express = require('express');
const { getAllCategories, getOneCategory } = require('./../controllers/categoryController');

const categoryRouter = express.Router();

categoryRouter.get('/',getAllCategories);
categoryRouter.get('/:id',getOneCategory);

module.exports = categoryRouter;