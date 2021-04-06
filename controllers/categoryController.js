const { category } = require('./../models/');

const categoryController = {};

categoryController.getAllCategories = async () => {
    try {
        const allCategories = await category.findAll(); 
        res.json({
            categories: allCategories
        });
    }
    catch(error) {
        res.json(error);
    }
};



module.exports = categoryController;