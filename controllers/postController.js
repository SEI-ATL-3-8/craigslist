const models = require('../models');

const postController = {}

postController.tags = async (req,res) => {
    try {
        let post = await models.post.findOne({
            where: {
                id: req.params.id
            }
        })
        let tags = await models.tag.getTags()
        res.json({post, tags})
    } catch (error) {
        res.json({error})
    }
}

module.exports = postController;