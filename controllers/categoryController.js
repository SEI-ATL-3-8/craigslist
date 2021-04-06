const { category, post } = require('./../models/');

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

categoryController.postCategoryPost = async (req,res) => {
    try {
        const oneCategory = await category.findOne({
            where: {
                id: req.params.id
            }
        });

        oneCategory.createPost(req.body).then(data => {
            res.json({
                category: oneCategory,
                post: data
            });
        });


    }

    catch(error) {
        res.json(error);
    }
};

categoryController.getCategoryPost = async (req,res) => {
    try {
        const oneCategory = await category.findOne({
            where: {
                id: req.params.id
            }
        });

        const allPosts = await oneCategory.getPosts();

        res.json({
            category: oneCategory,
            posts: allPosts
        })

    }
    catch(error) {
        res.json(error);
    }
}



module.exports = categoryController;