// grab models
const models = require('../models');

// controller obj
const postController = {};

// get tags from post
postController.getTags = async (req, res) =>
{
    try {
        // grab post
        const post = await models.post.findOne({ where: { id: req.params.id}});
        // check if post exists
        if (post)
        {
            // grab posts with post
            const tags = await post.getTags();
            // display tags with post
            res.json({post, tags});
        }
        // post does not exist
        else
        {
            res.json(`No post found with ID: ${req.params.id}`);
        }
    } catch (error) {
        res.json(error.message);
    }
}

module.exports = postController;