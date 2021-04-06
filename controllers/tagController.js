const models = require('../models');

const tagController = {}

tagController.getAll = async (req,res) => {
    try {
        let tags = await models.tag.findAll()
        res.json({tags})
    } catch (error) {
        res.json({error})
    }
}

tagController.getAllPosts = async (req,res) => {
try {
    let tag = await models.tag.findOne({
        where:{
            id: req.params.id
        }
    })
    let allPosts = await tag.getPosts()
    res.json({tag, allPosts})
} catch (error) {
    res.json({error})
}
}

tagController.associateWithPost = async (req,res) => {
    try {
     const post = await models.post.findOne({
         where:{
             id: req.params.postId
         }
     })
 
     const tag = await models.tag.findOne({
         where:{
             id: req.params.tagId
         }
     })
 
     await tag.addPost(post)
     res.json("tagging created");
    } catch (error) {
        res.json({error})
    }
 }

module.exports = tagController;