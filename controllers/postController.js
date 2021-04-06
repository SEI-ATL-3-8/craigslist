const models = require('../models')
const { category, post, tag } = models

const postController = {}

postController.getTags = async (req, res) => {
    try {
        const foundPost = await post.findOne({
            where: {id: req.params.id}
        })
        const tags = await foundPost.getTags()
        res.json({tags, post: foundPost})
    } catch (error) {
        console.log('ERROR', error);
        res.json({error})
    }
}

module.exports = postController