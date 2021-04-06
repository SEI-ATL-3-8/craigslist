const models = require('../models')

const tagController = {}

tagController.allTags = async (req,res) => {
    try {
        const tags =await models.tag.findAll()
        res.json({tags})
    } catch (error) {
        res.rson({error})
    }
}


tagController.getPosts = async (req, res) =>{
    try {
        let tag =await models.tag.findOne({
            where:{
                id: req.params.id
            }
        })

        let allPosts = await models.tag.getPosts()
        res.json({allPosts, tag})
    } catch (error) {
        res.json({error})
    }
}

module.exports = tagController 