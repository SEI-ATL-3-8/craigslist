const { category } = require('./../models/');

const categoryController = {};

categoryController.getAllCategories = async (req,res) => {
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

categoryController.getOneCategory = async (req,res) => {
    try {
        const oneCategory = await category.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json({
            category: oneCategory
        });
    }

    catch(error) {
        res.json(error);
    }
};



module.exports = categoryController;