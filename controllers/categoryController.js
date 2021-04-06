// grab models
const models = require('../models');

// controller obj
const categoryController = {};

// get all categories
categoryController.getAll = async (req, res) =>
{
    try {
        // grab categories
        const categories = await models.category.findAll();
        // check if categories is empty
        if (categories.length !== 0)
        {
            // display categories
            res.json({categories});
        }
        // no categories
        else
        {
            res.json(`No categories found. Start a new one!`);
        }
    } catch (error) {
        res.json(error.message);
    }
}
// get specific category
categoryController.getOne = async (req, res) =>
{
    try {
        // grab category
        const category = await models.category.findOne({ where: { id: req.params.id}});
        // check if category exists
        if (category)
        {
            // display category
            res.json({category});
        }
        // category does not exist
        else
        {
            res.json(`No category found with ID: ${req.params.id}`);
        }
    } catch (error) {
        res.json(error.message);
    }
}
// create category
categoryController.create = async (req, res) =>
{
    try {
        // create category
        const category = await models.category.create(
        {
            name: req.body.name
        })
        // display new category
        res.json({category});
    } catch (error) {
        res.json(error.message);
    }
}
// update category
categoryController.update = async (req, res) =>
{
    try {
        // grab category
        const category = await models.category.findOne({ where: { id: req.params.id}});
        // check if category exists
        if (category)
        {
            // update category
            category.update(req.body);
            // display category
            res.json({category});
        }
        // category does not exist
        else
        {
            res.json(`No category found with ID: ${req.params.id}`);
        }
    } catch (error) {
        res.json(error.message);
    }
}
// delete category
categoryController.delete = async (req, res) =>
{
    try {
        // grab category
        const category = await models.category.findOne({ where: { id: req.params.id}});
        // check if category exists
        if (category)
        {
            // delete category
            category.destroy();
            // display message
            res.json(`Category deleted successfully.`);
        }
        // category does not exist
        else
        {
            res.json(`No category found with ID: ${req.params.id}`);
        }
    } catch (error) {
        res.json(error.message);
    }
}
// post to category
categoryController.newPost = async (req, res) =>
{
    try {
        // grab category
        const category = await models.category.findOne({ where: { id: req.params.id}});
        // check if category exists
        if (category)
        {
            // create new post
            const post = await models.post.create(
            {
                title: req.body.title,
                description: req.body.description
            })
            // add post to category
            category.addPost(post);
            // display category with post
            res.json({category, post});
        }
        // category does not exist
        else
        {
            res.json(`No category found with ID: ${req.params.id}`);
        }
    } catch (error) {
        res.json(error.message);
    }
}
// get posts from category
categoryController.getPosts = async (req, res) =>
{
    try {
        // grab category
        const category = await models.category.findOne({ where: { id: req.params.id}});
        // check if category exists
        if (category)
        {
            // grab posts
            const posts = await category.getPosts();
            // display category
            res.json({category, posts});
        }
        // category does not exist
        else
        {
            res.json(`No category found with ID: ${req.params.id}`);
        }
    } catch (error) {
        res.json(error.message);
    }
}
// add tag to category
categoryController.newTag = async (req, res) =>
{
    try {
        // grab category
        const category = await models.category.findOne({ where: { id: req.params.categoryId}});
        // check if category exists
        if (category)
        {
            // grab tag
            const tag = await models.tag.findOne({ where: { id: req.params.tagId}});
            // check if tag exists
            if (tag)
            {
                // add tag to category
                category.addTag(tag);
                // display category with tags
                res.json({category, tag});
            }
            // tag does not exist
            else
            {
                res.json(`No tag found with ID: ${req.params.tagId}`);
            }
        }
        // category does not exist
        else
        {
            res.json(`No category found with ID: ${req.params.categoryId}`);
        }
    } catch (error) {
        res.json(error.message);
    }
}
// get tags from category
categoryController.getTags = async (req, res) =>
{
    try {
        // grab category
        const category = await models.category.findOne({ where: { id: req.params.id}});
        // check if category exists
        if (category)
        {
            // get tags from category
            const tags = await category.getTags();
            // display category with tags
            res.json({category, tags});
        }
        // category does not exist
        else
        {
            res.json(`No category found with ID: ${req.params.id}`);
        }
    } catch (error) {
        res.json(error.message);
    }
}

module.exports = categoryController;