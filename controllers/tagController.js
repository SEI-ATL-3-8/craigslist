// grab models
const models = require('../models');

// controller obj
const tagController = {};

// get all tags
tagController.getAll = async (req, res) =>
{
    try {
        // grab tags
        const tags = await models.tag.findAll();
        // check if tags is empty
        if (tags.length !== 0)
        {
            // display tags
            res.json({tags});
        }
        // no tags
        else
        {
            res.json(`No tags found. Start a new one!`);
        }
    } catch (error) {
        res.json(error.message);
    }
}
// get posts with tag
tagController.getPosts = async (req, res) =>
{
    try {
        // grab tag
        const tag = await models.tag.findOne({ where: { id: req.params.id}});
        // check if tag exists
        if (tag)
        {
            // grab posts with tag
            const posts = await tag.getPosts();
            // display posts with tag
            res.json({tag, posts});
        }
        // tag does not exist
        else
        {
            res.json(`No tag found with ID: ${req.params.id}`);
        }
    } catch (error) {
        res.json(error.message);
    }
}

module.exports = tagController;