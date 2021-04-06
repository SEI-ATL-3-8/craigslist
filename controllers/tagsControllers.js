const models = require('../models')
const tag = require('../models/tags')
const tagsControllers = {}

tagsControllers.getAll = async (req, res) => {
    try {
        let tags = await models.tags.findAll()
        res.json({tags})
    } catch (error) {
        res.json({error})
    }
}

module.exports = tagsControllers