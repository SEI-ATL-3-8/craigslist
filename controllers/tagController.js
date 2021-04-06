const models = require('../models')
const { category, post, tag } = models

const tagController = {}

tagController.getAll = async (req, res) => {
    try {
        const allTags = await tag.findAll()
        res.json({tags: allTags}) 
    } catch (error) {
        res.json({error})
    }
}

module.exports = tagController