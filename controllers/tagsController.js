const models = require('../models')

const tagsController = {}

tagsController.getAll = async (req, res) => {
    let tags = await models.tag.findAll()
    res.json({tags})
}

tagsController.getPosts = async (req, res) => {
    let oneTag = await models.tag.findOne({
        where:{
            id: req.params.id
        }
    })
    let posts = await oneTag.getPosts()
    res.json({oneTag, posts})
}

module.exports = tagsController