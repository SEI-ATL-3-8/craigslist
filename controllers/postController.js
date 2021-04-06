const models = require('../models')

const postController = {}

postController.getAllTags = async (req, res) => {
    try {
        let post = await models.post.findOne({
            where: {
                id: req.params.id
            }
        })
        let tags = post.getTags()
        res.json({tags})
    } catch (error) {
        res.json({error})
    }
}

module.exports = postController