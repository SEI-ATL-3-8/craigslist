const models = require ('../models')
const postController = {}

postController.getAll = async (req,res) => {
    try{
        let posts = await models.post.findAll()
        res.json({
            posts
        })
    } catch (error) {
        res.json({error})
    }
}

postController.findOne = async (req,res) => {
    try {
        let post = await models.post.findOne({
            where: {
                id: req.params.id
            }
        })
        let tag = await post.getTag()
        res.json({
            posts, tag
        })
    } catch (error) {
        res.json({error})
    }
}

postController.create = async (req,res) => {
    try {
        let post = await models.post.create ({
            title: req.body.title,
            description: req.body.description
        })
        res.json({
            post
        })
    } catch (error){
        res.json({error})
    }
}

postController.update = async (req,res) => {
    try {
        let post = await models.post.findOne({
            where: {
                id: req.params.id
            }
        })
        let updates = await post.update (req.body)
        res.json ({updates})
    } catch (error) {
        res.json ({error})
    }
}

postController.delete = async (req,res) => {
    try {
        let post = await models.post.findOne({
            where: {
                id: req.params.id
            }
        })
        let tag = await post.getTag()
        for (let tag of tags){
            await tag.destroy()
        }
        let deletedPost = await post.destroy()
        res.json ({deletedPost})
    } catch (error) {
        res.json ({error})
    }
}
 postController.tag = async (req,res) => {
     let post = await models.post.findOne({
         where: {
             id: req.params.id
         }
     })
     let tag = await models.tag.create ({
         description: req.body.description
     })
     post.addTag(comment)
     res.json ({post, tag})
 }


module.exports = postController
