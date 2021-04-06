const models = require('../models')

const tagControllers = {}

tagControllers.getAll = async (req, res) => {
    try {
        const tags = await models.tag.findAll()
        res.json({tags})
    } catch (error) {
        res.json({error})
    }
}

// The below "getAssociates" doesn't work because tag and category are not associated but my models have the association and the join table (collections) has the categoryId in the same row as the tagId. The console log errors result in the "get" function not being available. I can't figure out what's wrong here.
tagControllers.getAssociates = async (req, res) => {
    try {
        const tag = await models.tag.findOne({
            where: {
                id: req.params.id
            }
        })
        const category = await tag.getCategory()
        res.json({category})
        
    } catch (error) {
        res.json({error})
    }
}


module.exports = tagControllers