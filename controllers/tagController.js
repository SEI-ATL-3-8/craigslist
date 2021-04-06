const models = require('../models');

const tagController = {}

tagController.getAll = async (req, res) => {
    try {
        let tags = await models.tag.findAll()
    
        res.json({tags})
    } catch (error) {
        res.json({error})
    } 
}

tagController.getPosts = async (req, res) => {
    try {
        let tag = await models.tag.findOne({
            where: {
                id: req.params.id
            }
        })
        let posts = await tag.getPosts()

        res.json({posts, tag})
    } catch (error) {
        res.json({error})
    }
}


module.exports = tagController;