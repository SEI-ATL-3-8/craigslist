const express = require('express');
const { getAllCategories, } = require('./../controllers/categoryController');

const categoryRouter = express.Router();

categoryRouter.get('/',getAllCategories);

module.exports = categoryRouter;