const models = require('/models')
const tag = require('../models/tag')

const tagControllers = {}

tagControllers.getAll = async (req, res) => {
    try{
        const allTags = await models.tag.findAll()
        res.json({allTags})
    }catch (error) {
        res.json({error})
    }
}

module.exports = tagControllers