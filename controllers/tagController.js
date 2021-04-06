const models = require('../models')

const tagController = {}

tagController.getAllTags = async (req, res) => {
    try {
        let tags = await models.tag.findAll()
        res.json({tags})
    } catch (error) {
        res.json({error})
    }
}

tagController.getAllPosts = async (req, res) => {
    try {
        let tag = await models.tag.findOne({
            where: {
                id: req.params.id
            }
        })
        let posts = tag.getPosts()
        res.json({posts})
    } catch (error) {
        res.json({error})
    }
}

module.exports = tagController