const models = require('../models')

let postsController = {}

postsController.getTags = async (req, res) => {
    let onePost = await models.post.findOne({
        where:{
            id: req.params.id
        }
    })
    let tags = await onePost.getTags()
    res.json({onePost, tags})
    
}

module.exports = postsController