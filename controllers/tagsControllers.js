const models = require('../models')

const tagControllers = {}

tagControllers.getAll = async (req, res) => {
    try{
        const allTags = await models.tag.findAll()
        res.json({allTags})
    }catch (error) {
        console.log("ERROR", error);
        res.json({error})
    }
}

tagControllers.getPosts = async (req, res) => {
    try {
        let oneTag = await models.tag.findOne({
            where: {
                id: id.params.id
            }
        })
        let allPosts = await tag.getPosts()
        res.json({oneTag, allPosts})
        
    }catch (error) {
        console.log(error);
        res.json({error})
    }
}

module.exports = tagControllers