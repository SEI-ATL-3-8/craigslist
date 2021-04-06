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

module.exports = tagController