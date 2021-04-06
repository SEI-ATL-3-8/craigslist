const models = require('../models')
// const post = require('../models/post')
const postController = {}

postController.getAll = async (req, res) => {
    try {
        let posts = await models.post.findAll()
        res.json({
            posts
        })
    } catch (error) {
        res.json({error})
    }
}



module.exports = postController